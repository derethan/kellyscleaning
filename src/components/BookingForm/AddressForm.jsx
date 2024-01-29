import { Box, TextField } from '@mui/material'

import CardHeader1 from '../CardHeader1'

const addressForm = ({formData, handleChange, formErrors}) => {

    return (
        <Box sx={{
            marginBottom: '1.5rem',
            '& .MuiTextField-root': { m: 1, width: '25ch'},
            }}>

            <CardHeader1 varient='h6'
            primaryText='Where would you like us to clean?'
            subText='Please provide the address of the location you would like us to clean.'
            />    

            

            <TextField

                sx={{minWidth: '90%'}}

                required

                name='address'
                value={formData.address}
                onChange={handleChange}

                id="outlined-basic"
                label="Address"
                variant="outlined"
                size='small'

                error={!!formErrors.address} // The error prop is true when there's an error for firstName
                helperText={formErrors.address} // The helperText prop is the error message for firstName
            />
            
            <br />
            <TextField
                
                name='apt'
                value={formData.apt}
                onChange={handleChange}

                id="outlined-basic"
                label="Apt/Suite #"
                variant="outlined"
                size='small'

                error={!!formErrors.apt} // The error prop is true when there's an error for firstName
                helperText={formErrors.apt} // The helperText prop is the error message for firstName
            />
            
            <TextField
                required

                name='city'
                value={formData.city}
                onChange={handleChange}

                id="outlined-basic"
                label="City"
                variant="outlined"
                size='small'

                error={!!formErrors.city} // The error prop is true when there's an error for firstName
                helperText={formErrors.city} // The helperText prop is the error message for firstName
            />

        </Box>
    )
}

export default addressForm