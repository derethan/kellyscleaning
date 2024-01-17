// Import Images
import siteLogo from '../assets/logo_main.png';

// Import Components
import { Container, Card, CardContent, CardActions, Typography } from '@mui/material';
import MainButton from './MainButton';
import { Link } from 'react-router-dom';

// Import Styles
import './styles/SiteBanner.css';

const SiteBanner = () => {
    return (
        <div className='site-banner'>
            
            <img src={siteLogo} alt='site banner' className='banner-logo' />

            <Container maxWidth='lg'>

            <Card className='card-blue'>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="var(--color-primary)" gutterBottom>
                    Welcome
                    </Typography>
                    <Typography variant="h4" color="var(--font-grey)">                    
                    A Clean home is a happy home
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="var(--font-lightgrey)">
                    Book your appointment today!
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to='/booking'>
                        <MainButton> Book Now </MainButton>
                    </Link>
                </CardActions>

            </Card>


            </Container>

        </div>
        
    )
}

export default SiteBanner;