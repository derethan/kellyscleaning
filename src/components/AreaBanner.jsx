import { Typography } from "@mui/material";


const AreaBanner = () => {

    return (
        // This is the locations we service section
        <>
        <Typography variant="h4" component="h1" gutterBottom sx={{ 
            color: 'var(--font-grey)',
            paddingBottom: '1.5rem' }}>
            Locations We Service
        </Typography>
        </>
    )

}

export default AreaBanner;