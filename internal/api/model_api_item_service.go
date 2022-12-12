/*
 * Kusk Gateway API
 *
 * This is the Kusk Gateway Management API
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package api

type ApiItemService struct {
	Name string `json:"name"`

	Namespace string `json:"namespace"`
}

// AssertApiItemServiceRequired checks if the required fields are not zero-ed
func AssertApiItemServiceRequired(obj ApiItemService) error {
	elements := map[string]interface{}{
		"name":      obj.Name,
		"namespace": obj.Namespace,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	return nil
}

// AssertRecurseApiItemServiceRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of ApiItemService (e.g. [][]ApiItemService), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseApiItemServiceRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aApiItemService, ok := obj.(ApiItemService)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertApiItemServiceRequired(aApiItemService)
	})
}
