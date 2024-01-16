// Import Components
import { Typography, Card } from '@mui/material';

const ServiceCard = ({ title, subtext, desc  }) => {
    
    return (
    <Card sx={
        {
            backgroundColor: 'var(--color-secondary)',
            color: 'black',
            transition: 'all 0.5s ease',
            '&:hover': {
                boxShadow: '0 0 0.6rem rgba(0,0,0,0.5)',
                transform: 'scale(1.05)',
            },
        }
    
    }>
        <Typography variant="h5" component="div" gutterBottom sx={{
            color: 'white',
            paddingTop: '1rem',
            }}>
            {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
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