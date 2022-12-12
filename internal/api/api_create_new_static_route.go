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
	"encoding/json"
	"net/http"
	"strings"
)

// CreateNewStaticRouteApiController binds http requests to an api service and writes the service results to the http response
type CreateNewStaticRouteApiController struct {
	service      CreateNewStaticRouteApiServicer
	errorHandler ErrorHandler
}

// CreateNewStaticRouteApiOption for how the controller is set up.
type CreateNewStaticRouteApiOption func(*CreateNewStaticRouteApiController)

// WithCreateNewStaticRouteApiErrorHandler inject ErrorHandler into controller
func WithCreateNewStaticRouteApiErrorHandler(h ErrorHandler) CreateNewStaticRouteApiOption {
	return func(c *CreateNewStaticRouteApiController) {
		c.errorHandler = h
	}
}

// NewCreateNewStaticRouteApiController creates a default api controller
func NewCreateNewStaticRouteApiController(s CreateNewStaticRouteApiServicer, opts ...CreateNewStaticRouteApiOption) Router {
	controller := &CreateNewStaticRouteApiController{
		service:      s,
		errorHandler: DefaultErrorHandler,
	}

	for _, opt := range opts {
		opt(controller)
	}

	return controller
}

// Routes returns all of the api route for the CreateNewStaticRouteApiController
func (c *CreateNewStaticRouteApiController) Routes() Routes {
	return Routes{
		{
			"CreateStaticRoute",
			strings.ToUpper("Post"),
			"/staticroutes",
			c.CreateStaticRoute,
		},
	}
}

// CreateStaticRoute - create new static route
func (c *CreateNewStaticRouteApiController) CreateStaticRoute(w http.ResponseWriter, r *http.Request) {
	inlineObject1Param := InlineObject1{}
	d := json.NewDecoder(r.Body)
	d.DisallowUnknownFields()
	if err := d.Decode(&inlineObject1Param); err != nil {
		c.errorHandler(w, r, &ParsingError{Err: err}, nil)
		return
	}
	if err := AssertInlineObject1Required(inlineObject1Param); err != nil {
		c.errorHandler(w, r, err, nil)
		return
	}
	result, err := c.service.CreateStaticRoute(r.Context(), inlineObject1Param)
	// If an error occurred, encode the error with the status code
	if err != nil {
		c.errorHandler(w, r, err, &result)
		return
	}
	// If no error, encode the body and the result code
	_ = EncodeJSONResponse(result.Body, &result.Code, w)
}
