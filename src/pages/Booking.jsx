import Container from '@mui/material/Container';

import Banner from '../components/Banner';
import BookingForm from '../components/BookingForm/BookingForm';


const BookingPage = () => {
    return (

        <>
        <Container className='banner' maxWidth="100vw">
            <Banner text="View Pricing, Availability, and Book your Cleaning Below" />
        </Container>

        <Container maxWidth="100vw" sx={{
            backgroundColor: '#f5f5f5'
        }}>
            <BookingForm />
        </Container>


        </>
    )
}

export default BookingPage;