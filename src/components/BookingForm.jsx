import { useState } from 'react';

import { Container, Box, Card, Button } from '@mui/material';

import AddressForm from './AddressForm';

import Divider from './Divider';
import CardHeader1 from './CardHeader1';
import ContactInfoForm from './ContactInfoForm';
import DateSelectionForm from './DateSelectionForm';

import dayjs from 'dayjs';

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
        notes: '',
    });

    // Setup Form Errors State
    const [formErrors, setErrors] = useState({});

    //Setup Date State
    const [date, setDate] = useState({
        date: dayjs(),
        time: dayjs(),
    });


    // Handle Form Data Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    // Handle Date Change
    const handleDateChange = (newValue, name) => {
            setDate((prevState) => ({...prevState, [name]: newValue}));
    }

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
    

    /********************************************
     *  Booking Form Component Return Statement  *
     * ******************************************/


    return (
        <Container maxWidth="sm" sx={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
        }}>

            <Card sx={{
                padding: '2rem',
                width: '100%',
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

                    <DateSelectionForm date={date} handleChange={handleDateChange} />



                    <Button variant="contained" 
                        type='submit'
                        >
                        Book Cleaning
                    </Button>

                    
                </Box>
                

            </Card>
        </Container>

    )
}


export default BookingForm;