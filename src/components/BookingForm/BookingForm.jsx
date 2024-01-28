import { useState } from 'react';

import { Container, Box, Card, Button } from '@mui/material';

import AddressForm from './AddressForm';

import Divider from '../Divider';
import CardHeader1 from '../CardHeader1';
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
            console.log(date.date.format('MM/DD/YYYY'));
            console.log(date.time.format('h:mm A'));
            createBooking();
        }
        // Otherwise, log the errors
        else {
            console.log('Invalid Form Data: ', errors);
        }
    }
    
    const createBooking = () => {

        fetch ('http://localhost:3000/booking/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                apt: formData.apt,
                city: formData.city,
                notes: formData.notes,
                date: date.date.format('MM/DD/YYYY'),
                time: date.time.format('h:mm A'),
            })
            })
            .then((response) => response.json())

            .then((data) => {
                console.log('Success:', data.bookingId);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

        
        // Fetch Booking Data
        const getData = async (endpoint) => {
            const URL = import.meta.env.VITE_API_URL;

            try {
                // Fetch Data
                const responce = await fetch(URL + endpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Throw Error if responce is not ok
                if (!responce.ok) {
                    throw new Error(`HTTP Error: ${responce.status}`);
                } 

                // Return Data
                const data = await responce.json();
                return data;            
            
            } catch (error) {
                console.log(error);
            }

        };

        // Fetch Booking Data
        const availableHours = getData('booking/availability').then((data) => {
            console.log(data.availability);
        });

        //test
        console.log(availableHours);


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