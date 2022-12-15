/*
 * Kusk Gateway API
 *
 * This is the Kusk Gateway Management API
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package api

import (
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

// FleetsApiController binds http requests to an api service and writes the service results to the http response
type FleetsApiController struct {
	service      FleetsApiServicer
	errorHandler ErrorHandler
}

// FleetsApiOption for how the controller is set up.
type FleetsApiOption func(*FleetsApiController)

// WithFleetsApiErrorHandler inject ErrorHandler into controller
func WithFleetsApiErrorHandler(h ErrorHandler) FleetsApiOption {
	return func(c *FleetsApiController) {
		c.errorHandler = h
	}
}

// NewFleetsApiController creates a default api controller
func NewFleetsApiController(s FleetsApiServicer, opts ...FleetsApiOption) Router {
	controller := &FleetsApiController{
		service:      s,
		errorHandler: DefaultErrorHandler,
	}

	for _, opt := range opts {
		opt(controller)
	}

	return controller
}

// Routes returns all of the api route for the FleetsApiController
func (c *FleetsApiController) Routes() Routes {
	return Routes{
		{
			"DeleteFleet",
			strings.ToUpper("Delete"),
			"/fleets/{namespace}/{name}",
			c.DeleteFleet,
		},
		{
			"GetEnvoyFleet",
			strings.ToUpper("Get"),
			"/fleets/{namespace}/{name}",
			c.GetEnvoyFleet,
		},
		{
			"GetEnvoyFleetCRD",
			strings.ToUpper("Get"),
			"/fleets/{namespace}/{name}/crd",
			c.GetEnvoyFleetCRD,
		},
		{
			"GetEnvoyFleets",
			strings.ToUpper("Get"),
			"/fleets",
			c.GetEnvoyFleets,
		},
	}
}

// DeleteFleet - Delete a Fleet instance by namespace and name
func (c *FleetsApiController) DeleteFleet(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	namespaceParam := params["namespace"]

	nameParam := params["name"]

	result, err := c.service.DeleteFleet(r.Context(), namespaceParam, nameParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}

// GetEnvoyFleet - Get details for a single envoy fleet
func (c *FleetsApiController) GetEnvoyFleet(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	namespaceParam := params["namespace"]

	nameParam := params["name"]

	result, err := c.service.GetEnvoyFleet(r.Context(), namespaceParam, nameParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}

// GetEnvoyFleetCRD - Get envoy fleet CRD
func (c *FleetsApiController) GetEnvoyFleetCRD(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	namespaceParam := params["namespace"]

	nameParam := params["name"]

	result, err := c.service.GetEnvoyFleetCRD(r.Context(), namespaceParam, nameParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}

// GetEnvoyFleets - Get a list of envoy fleets
func (c *FleetsApiController) GetEnvoyFleets(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	namespaceParam := query.Get("namespace")
	result, err := c.service.GetEnvoyFleets(r.Context(), namespaceParam)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}
