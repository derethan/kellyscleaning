// Import Components
import { Typography, Card } from '@mui/material';

// Import prop types
import PropTypes from 'prop-types';


// Prop Types
ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}


const ServiceCard = ({ title, subtext, desc  }) => {
    
    return (
    <Card sx={
        {
            backgroundColor: 'var(--color-secondary)',
            opacity: '0.9',
            borderRadius: '0.5rem',
            color: 'black',
            transition: 'all 0.5s ease',
            '&:hover': {
                backgroundColor: 'var(--color-primary)',
                boxShadow: '0 0 0.6rem rgba(0,0,0,0.5)',
                transform: 'scale(1.05)',
                opacity: '1',
            },
        }
    
    }>
        <Typography variant="h5" component="div" gutterBottom sx={{
            color: 'white',
            paddingTop: '1rem',
            }}>
            {title}
        </Typography>
        <Typography sx={{ 
            mb: 1.5,
             }} color="text.secondary">
            {subtext}
        </Typography>
        <Typography variant="body2" gutterBottom sx={
            {
                padding: '0 1.5rem 1rem 1.5rem',
            }
        }>
            {desc}
        </Typography>
    </Card>
    );
};



export default ServiceCard;