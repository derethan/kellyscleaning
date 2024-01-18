import { Container, Box, Typography, Card } from '@mui/material';

import Divider from './Divider';

const BookingForm = () => {
    return (
        <Container maxWidth="sm" sx={{
            padding: '2rem',
        }}>


            <Card sx={{
                padding: '2rem',
                width: '100%'
            }}>

                <Box sx={{marginBottom: '1.5rem'}}>
                    <Typography variant="h5" gutterBottom sx={{
                        color: 'var(--color-primary)',
                        paddingTop: '1rem',
                        }}>
                        Book a Cleaning
                    </Typography>
                    <Typography sx={{ 
                        mb: 1.5,
                        fontSize: '0.8rem',
                        }} 
                        color="text.secondary">
                        Setup your Cleaning appointment below and book when you are ready.<br />
                        No payment until day of service. 24hr cancellation policy. 
                    </Typography>
                </Box>

                <Divider />

            </Card>
        </Container>

    )
}


export default BookingForm;