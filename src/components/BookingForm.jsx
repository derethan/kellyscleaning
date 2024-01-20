import { useState } from 'react';

import { Container, Box, Card, Button } from '@mui/material';

import AddressForm from './AddressForm';

import Divider from './Divider';
import CardHeader1 from './CardHeader1';
import ContactInfoForm from './ContactInfoForm';


const BookingForm = () => {

    // Setup Form Data State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        apt: '',
        city: '',
        date: '',
        time: '',
        notes: '',
    });
    // Setup Form Errors State
    const [formErrors, setErrors] = useState({});

    // List of required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city'];
    
    // Handle Form Data Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }



    // Validate Form Data
    const validateForm = () => {
        const errors = {};

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

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //  Get the errors object from the validateForm function
        const errors = validateForm();

        // If the form is valid, log the form data
        if (Object.keys(errors).length === 0) {
            
            console.log(formData);
        }

        // Otherwise, log the errors
        else {
            console.log('Invalid Form Data: ', errors);
        }
        
    }
    
    return (
        <Container maxWidth="sm" sx={{
            padding: '2rem',
        }}>

            <Card sx={{
                padding: '2rem',
                width: '100%'
            }}>
                <CardHeader1 varient='h5' 
                primaryText='Book a Cleaning' 
                subText='Setup your Cleaning appointment below and book when you are ready.
                  No payment until day of service. 24hr cancellation policy. '/>

                <Divider />

                {/* Form Content Begins Here */}

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch'},
                    }}>


                    <ContactInfoForm formData={formData} handleChange={handleChange} formErrors={formErrors} />

                    <AddressForm formData={formData} handleChange={handleChange} formErrors={formErrors} />


                    <Button variant="contained" 
                        type='submit'
                        >
                        Book Cleaning
                    </Button>

{/* 
                    <Box sx={{
                        marginBottom: '1.5rem',
                        }}>
                        <CardHeader1 varient='h6'
                        primaryText='When would you like us to clean?'
                        subText='Please select an available date and time for your cleaning.
                        If you cannot find a time that works for you, please contact us and we will do our best to accomodate you.'
                        />


                    </Box> */}
                </Box>
                

            </Card>
        </Container>

    )
}


export default BookingForm;