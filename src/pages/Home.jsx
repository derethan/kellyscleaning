// Import Components
import Container from '@mui/material/Container';

import SiteBanner from '../components/SiteBanner';
import ServiceBanner from '../components/ServiceBanner';
import AreaBanner from '../components/AreaBanner';

const Home = () => {
    return (
        <>
        <Container maxWidth="lg">
            <SiteBanner />
        </Container>
      
        <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
            <ServiceBanner />
        </Container>

        <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
            <AreaBanner />
        </Container>

        </>
    )
}

export default Home;