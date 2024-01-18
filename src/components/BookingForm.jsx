
import React from 'react';
import { Container, Box, Typography, Card } from '@mui/material';

const BookingForm = () => {
    return (
        <Container maxWidth="sm" sx={{
            padding: '2rem',
        }}>


            <Card sx={{
                padding: '2rem',
                width: '100%'
            }}>

                <box>
                    <Typography variant="h5" component="div" gutterBottom sx={{
                        color: 'var(--color-primary)',
                        paddingTop: '1rem',
                        }}>
                        Book a Cleaning
                    </Typography>
                    <Typography sx={{ 
                        mb: 1.5,
                        }} color="text.secondary">
                        Please fill out the form below to book a cleaning.
                    </Typography>
                </box>


            </Card>
        </Container>

    )
}


export default BookingForm;