// Desc: Service Banner

// Import Components
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ServiceCard from './ServiceCard';


import HomeIcon from '@mui/icons-material/Home';
import DeepCleanIcon from '@mui/icons-material/CleaningServices';
import CommercialIcon from '@mui/icons-material/Business';
import MovingTruckIcon from '@mui/icons-material/LocalShipping';


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
                    desc="Standard upkeep of high-traffic areas of your home to help you live stress-free."
                    icon={<HomeIcon 
                        sx={{
                            fontSize: '5rem',
                            paddingTop: '1rem',
                            color: 'var(--font-grey)',
                        
                        }}
                         />}
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <ServiceCard
                    title="Deep Cleaning"
                    subtext="For Businesses & Residences"
                    desc="A thorough cleaning of your home including hard-to-reach areas like under furniture and appliances, as well as baseboards and window sills."
                    icon={<DeepCleanIcon
                        sx={{
                            fontSize: '5rem',
                            paddingTop: '1rem',
                            color: 'var(--font-grey)',
                        
                        }}
                        />}
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <ServiceCard
                    title="Commercial Cleaning"
                    subtext="For Businesses"
                    desc="A cleaning service that involves maintaining cleanliness and upkeep of office spaces and more."
                    icon={<CommercialIcon
                        sx={{
                            fontSize: '5rem',
                            paddingTop: '1rem',
                            color: 'var(--font-grey)',
                        
                        }}
                        />}
                />
            </Grid>

            <Grid item xs={12} md>
                <ServiceCard
                    title="Move In/Out Cleaning"
                    subtext="For Landlords & Tenants"
                    desc="
                    A cleaning service catered to long term rental properties, ensuring property is clean and in welcoming condition.
                    This top-to-bottom cleaning service includes dusting, vacuuming, and disinfecting of all surfaces to prepare the home for new occupants."
                    icon={<MovingTruckIcon
                        sx={{
                            fontSize: '5rem',
                            paddingTop: '1rem',
                            color: 'var(--font-grey)',
                        
                        }}
                        />}
                />
            </Grid>
            
        </Grid>



        </>


    );
}

export default ServiceBanner;