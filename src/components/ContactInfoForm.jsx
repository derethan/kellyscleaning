
// Import dependencies
import { Box, TextField } from '@mui/material';

import CardHeader1 from './CardHeader1';


// Import prop types
import PropTypes from 'prop-types';



// Create ContactInfoForm component
const ContactInfoForm = ({ formData, handleChange, formErrors }) => {
    return (
        <Box sx={{
            marginBottom: '1.5rem',
            }}>

            <CardHeader1 varient='h6' 
            primaryText='Your Contact Information' 
            subText='This information will be used to contact you about your service.' 
            />

            <TextField
                required

                name='firstName'
                value={formData.firstName}
                onChange={handleChange}

                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size='small'

                error={!!formErrors.firstName} // The error prop is true when there's an error for firstName
                helperText={formErrors.firstName} // The helperText prop is the error message for firstName
            />

            <TextField
                required

                name='lastName'
                value={formData.lastName}
                onChange={handleChange}

                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size='small'

                error={!!formErrors.lastName} // The error prop is true when there's an error for firstName
                helperText={formErrors.lastName} // The helperText prop is the error message for firstName
            />

            <TextField
                required

                name='email'
                value={formData.email}
                onChange={handleChange}

                id="outlined-basic"
                label="Email"
                variant="outlined"
                size='small'

                error={!!formErrors.email} // The error prop is true when there's an error for firstName
                helperText={formErrors.email} // The helperText prop is the error message for firstName
            />

            <TextField
                required

                name='phone'
                value={formData.phone}
                onChange={handleChange}

                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size='small'

                error={!!formErrors.phone} // The error prop is true when there's an error for firstName
                helperText={formErrors.phone} // The helperText prop is the error message for firstName
            />

        </Box>
    )
}


// Props validation
ContactInfoForm.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    formErrors: PropTypes.object.isRequired,
}

export default ContactInfoForm;