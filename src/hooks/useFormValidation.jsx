import {useState} from 'react';

export const useFormValidation = (formData) => {

    // Setup Form Errors State
    const [formErrors, setErrors] = useState({});


    // Validate Form Data
    const validateForm = () => {

        const errors = {};

        // List of required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city'];
    
        // For each field, check if it's empty, and if so add an error
        requiredFields.forEach((key) => {

            if (!formData[key]) {
                errors[key] = `Field cannot be empty`;
            }
        });

        // Set the errors state, errors will display on empty fields
        setErrors(errors);

        // Return the errors object (empty if no errors)
        return errors;
    }

    return [formErrors, validateForm];

}