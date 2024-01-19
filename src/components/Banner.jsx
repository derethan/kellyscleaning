// Generic Banner component that can be used on any page

import { Container, Typography } from '@mui/material';

//Custom styles
import BaseTheme from './BaseTheme';

//Props validation
import PropTypes from 'prop-types';

const Banner = ({ text }) => {
    return (
        <Container maxWidth='sm'>
            <BaseTheme>
                <Typography variant='div'>{text}</Typography>
            </BaseTheme>
        </Container>
    );
    }

    Banner.propTypes = {
        text: PropTypes.string.isRequired,
    }
    
export default Banner;