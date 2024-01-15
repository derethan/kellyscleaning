// Import Images
import siteLogo from '../assets/logo_main.png';

// Import MUI Components
import { Container, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

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
                    <Typography variant="h4" color="black">                    
                    A Clean home is a happy home
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Book your appointment today!
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' size="small">Book Now</Button>
                </CardActions>

            </Card>


            </Container>

        </div>
        
    )
}

export default SiteBanner;