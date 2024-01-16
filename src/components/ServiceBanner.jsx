// Desc: Service Banner

// Import Components
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ServiceCard from './ServiceCard';

const ServiceBanner = () => {

    return (
        <>
        <Typography variant="h4" component="h1" gutterBottom sx={{ 
            color: 'var(--font-grey)',
            paddingBottom: '1.5rem' }}>
        Our Cleaning Services
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={4}>
                <ServiceCard
                    title="Residential Cleaning"
                    subtext="For Homes & Condos"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc."
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <ServiceCard
                    title="Commercial Cleaning"
                    subtext="For Businesses"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc."
                />
            </Grid>
            
            <Grid item xs={12} md={4}>
                <ServiceCard
                    title="Deep Cleaning"
                    subtext="For Businesses & Residences"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc."
                />
            </Grid>

            <Grid item xs={12} md>
                <ServiceCard
                    title="Move In/Out Cleaning"
                    subtext="For Landlords &"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc. Sed vitae quam vel nunc ultricies ultricies. Donec euismod, nisi at rutrum ultricies, nisl leo ultrices ante, a fermentum nunc nisl vel nunc."
                />
            </Grid>
            
        </Grid>



        </>


    );
}

export default ServiceBanner;