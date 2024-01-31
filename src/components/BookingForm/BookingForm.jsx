import { Container, Box, Card, Button } from '@mui/material';

import Divider from '../Divider';
import CardHeader1 from '../CardHeader1';

import ContactInfoForm from './ContactInfoForm';
import AddressForm from './AddressForm';
import DateSelectionForm from './DateSelectionForm';

import { useContactInfo } from '../../hooks/useContactInfo';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useDateChange } from '../../hooks/useDateChange';
import { useCreateBooking } from '../../hooks/useCreateBooking';
import { useEffect } from 'react';


const BookingForm = () => {

    
    // Setup Form Data State
    const [formData, handleChange] = useContactInfo();
    const [date, handleDateChange] = useDateChange();

    // Setup Form Errors State
    const [formErrors, validateForm] = useFormValidation(formData);

    // Setup API Requests
    const { booking, createBooking } = useCreateBooking();
    
    // const { data:availableTimes } = useGetData('booking/availability');
    
    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //  Get the errors object from the validateForm function
        const errors = validateForm();

        // If the form is valid, create the booking
        if (Object.keys(errors).length === 0) {
            createBooking(formData, date);
        }
        // Otherwise, log the errors
        else {
            console.log('Invalid Form Data: ', errors);
        }
    }

    useEffect(() => {
        if (booking) {
            console.log(`New Booking Created: `, booking);
        }
    }, [booking]);

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
                        type='submit' >
                        Book Cleaning
                    </Button>
                    
                </Box>
            
            </Card>
        </Container>

    )
}


export default BookingForm;