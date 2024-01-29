import { useState } from 'react';

import { Container, Box, Card, Button } from '@mui/material';

import AddressForm from './AddressForm';

import Divider from '../Divider';
import CardHeader1 from '../CardHeader1';
import ContactInfoForm from './ContactInfoForm';
import DateSelectionForm from './DateSelectionForm';

import { useContactInfo } from '../../hooks/useContactInfo';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useDateChange } from '../../hooks/useDateChange';
import { useCreateBooking } from '../../hooks/useCreateBooking';
import { useGetData } from '../../hooks/useGetData';


const BookingForm = () => {

    
    // Setup Form Data State
    const [formData, handleChange] = useContactInfo();
    const [date, handleDateChange] = useDateChange();

    // Setup Form Errors State
    const [formErrors, validateForm] = useFormValidation(formData);

    // Setup API Requests
    const { createBooking } = useCreateBooking();
    const { data:availableTimes, loading, error } = useGetData('booking/availability');
    
    
   


    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log (availableTimes);

        // //  Get the errors object from the validateForm function
        // const errors = validateForm();

        // // If the form is valid, log the form data
        // if (Object.keys(errors).length === 0) {
            
            console.log(formData);
            console.log(date.date.format('MM/DD/YYYY'));
            console.log(date.time.format('h:mm A'));

        //     // createBooking();
        // }
        // // Otherwise, log the errors
        // else {
        //     console.log('Invalid Form Data: ', errors);
        // }
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