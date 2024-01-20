import { Box, Typography } from '@mui/material';

const CardHeader1 = ({ varient, primaryText, subText }) => {
    return (
        <Box sx={{marginBottom: '1.5rem'}}>
        <Typography variant={varient} gutterBottom sx={{
            color: 'var(--color-primary)',
            paddingTop: '1rem',
            }}>
            {primaryText}
        </Typography>
        <Typography sx={{ 
            mb: 1.5,
            fontSize: '0.8rem',
            }} 
            color="text.secondary">
            {subText}
        </Typography>
    </Box>
    )
}

export default CardHeader1;