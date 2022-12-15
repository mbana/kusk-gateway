/*
 * Kusk Gateway API
 *
 * This is the Kusk Gateway Management API
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package api

type ApiItemFleet struct {
	Name string `json:"name"`

	Namespace string `json:"namespace"`
}

// AssertApiItemFleetRequired checks if the required fields are not zero-ed
func AssertApiItemFleetRequired(obj ApiItemFleet) error {
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

// AssertRecurseApiItemFleetRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of ApiItemFleet (e.g. [][]ApiItemFleet), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseApiItemFleetRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aApiItemFleet, ok := obj.(ApiItemFleet)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertApiItemFleetRequired(aApiItemFleet)
	})
}