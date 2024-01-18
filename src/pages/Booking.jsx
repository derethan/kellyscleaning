import Container from '@mui/material/Container';

import Banner from '../components/Banner';
import BookingForm from '../components/BookingForm';


const BookingPage = () => {
    return (

        <>
        <Container className='banner' maxWidth="lg">
            <Banner text="View Pricing, Availability, and Book your Cleaning Below" />
        </Container>

        <Container maxWidth="lg" sx={{
            backgroundColor: '#f5f5f5'
        }}>
            <BookingForm />
        </Container>

        
        </>
    )
}

export default BookingPage;