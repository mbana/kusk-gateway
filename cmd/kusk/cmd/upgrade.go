/*
The MIT License (MIT)

# Copyright © 2022 Kubeshop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package cmd

import (
	"fmt"
	"path/filepath"
	"time"

	"github.com/spf13/cobra"
	appsv1 "k8s.io/api/apps/v1"
	"sigs.k8s.io/controller-runtime/pkg/client"

	"github.com/kubeshop/kusk-gateway/cmd/kusk/internal/errors"
	"github.com/kubeshop/kusk-gateway/cmd/kusk/internal/kuskui"
	"github.com/kubeshop/kusk-gateway/cmd/kusk/internal/utils"
)

var (
	installOnUpgrade              bool
	releaseName, releaseNamespace string
)

var upgradeCmd = &cobra.Command{
	Use:   "upgrade",
	Short: "Upgrade Kusk Gateway, envoy-fleet, api, and dashboard in a single command",
	Long: `
	Upgrade Kusk Gateway, envoy-fleet, api, and dashboard in a single command.

	$ kusk cluster upgrade

	Will upgrade or install Kusk Gatewway, Kusk Dashboard, Kusk API, and envoy-fleets and install them if they are not installed`,
	RunE: func(cmd *cobra.Command, args []string) error {
		reportError := func(err error) {
			if err != nil {
				errors.NewErrorReporter(cmd, err).Report()
			}
		}

		var dir string
		var err error
		if dir, err = getManifests(); err != nil {
			return err
		}

		c, err := utils.GetK8sClient()
		if err != nil {
			reportError(err)
			return err
		}

		kuskui.PrintStart("Checking if Kusk is already installed...")

		deployments := appsv1.DeploymentList{}
		if err := c.List(cmd.Context(), &deployments, &client.ListOptions{Namespace: "kusk-system"}); err != nil {
			reportError(err)
			return err
		}
		for _, deployment := range deployments.Items {
			switch deployment.Name {
			case "kusk-gateway-manager":
				kuskui.PrintStart("Kusk is already installed. Upgrading...")

				for _, c := range deployment.Spec.Template.Spec.Containers {
					if c.Name == "manager" {
						if err := applyk(dir); err != nil {
							kuskui.PrintError("❌ failed upgrading Kusk", err.Error())
							reportError(err)
							return err
						}
						kuskui.PrintStart("Kusk upgraded")
					}
				}

				if err := utils.WaitForPodsReady(cmd.Context(), c, namespace, name, time.Duration(5*time.Minute), "component"); err != nil {
					kuskui.PrintError("❌ failed upgrading Envoy Fleets", err.Error())
					reportError(err)
					return err
				}

			case "kusk-gateway-private-envoy-fleet", "kusk-gateway-envoy-fleet":
				if err := applyf(filepath.Join(dir, manifests_dir, "fleets.yaml")); err != nil {
					kuskui.PrintError("❌ failed upgrading Envoy Fleets", err.Error())
					reportError(err)
					return err
				}

				if err := utils.WaitForPodsReady(cmd.Context(), c, namespace, "envoy", time.Duration(5*time.Minute), "component"); err != nil {
					kuskui.PrintError("❌ failed upgrading Envoy Fleets", err.Error())
					reportError(err)
					return err
				}

				fmt.Println("✅ Envoy Fleets upgraded")
			case "kusk-gateway-api":
				fmt.Println("✅ Kusk API server is already installed. Upgrading...")
				if err := applyf(filepath.Join(dir, manifests_dir, "api_server.yaml")); err != nil {
					kuskui.PrintError("❌ failed upgrading API Server", err.Error())
					reportError(err)
					return err
				}
				if err := utils.WaitForPodsReady(cmd.Context(), c, namespace, "kusk-gateway-api", time.Duration(5*time.Minute), "instance"); err != nil {
					kuskui.PrintError("❌ failed upgrading API Server", err.Error())
					reportError(err)
					return err
				}

				if err := applyf(filepath.Join(dir, manifests_dir, "api_server_api.yaml")); err != nil {
					kuskui.PrintError("❌ failed upgrading API Server", err.Error())
					reportError(err)
					return err
				}
				kuskui.PrintStart("API Server installed")
			case "kusk-gateway-dashboard":
				fmt.Println("✅ Kusk Dashboard is already installed. Upgrading...")
				if err := applyf(filepath.Join(dir, manifests_dir, "dashboard.yaml")); err != nil {
					kuskui.PrintError("❌ failed upgrading Dashboard", err.Error())
					reportError(err)
					return err
				}
				if err := utils.WaitForPodsReady(cmd.Context(), c, namespace, "kusk-gateway-dashboard", time.Duration(5*time.Minute), "instance"); err != nil {
					kuskui.PrintError("❌ failed upgrading Dashboard", err.Error())
					reportError(err)
					return err
				}

				if err := applyf(filepath.Join(dir, manifests_dir, "dashboard_envoyfleet.yaml")); err != nil {
					kuskui.PrintError("❌ failed upgrading Dashboard", err.Error())
					reportError(err)
					return err
				}

				if err := applyf(filepath.Join(dir, manifests_dir, "dashboard_staticroute.yaml")); err != nil {
					kuskui.PrintError("❌ failed upgrading Dashboard", err.Error())
					reportError(err)
					return err
				}
				kuskui.PrintStart("Dashboard upgraded")
			}
		}

		return nil
	},
}

func init() {
	clusterCmd.AddCommand(upgradeCmd)

	upgradeCmd.Flags().StringVar(&releaseName, "name", "kusk-gateway", "name of release to update")
	upgradeCmd.Flags().StringVar(&releaseNamespace, "namespace", "kusk-system", "namespace to upgrade in")
	upgradeCmd.Flags().BoolVar(&installOnUpgrade, "install", false, "install components if not installed")
}
