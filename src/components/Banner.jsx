// Generic Banner component that can be used on any page

import { Container, Typography } from '@mui/material';

//Props validation
import PropTypes from 'prop-types';



const Banner = ({ text }) => {
    return (

        <Container maxWidth='sm'>
                <Typography variant="h4">{text}</Typography>
        </Container>
    );
    }

    Banner.propTypes = {
        text: PropTypes.string.isRequired,
    }
    
export default Banner;