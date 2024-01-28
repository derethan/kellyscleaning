import { Box } from '@mui/material';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, MobileTimePicker, renderDigitalClockTimeView } from '@mui/x-date-pickers';

import CardHeader1 from '../CardHeader1';


import props from 'prop-types';


const DateSelectionForm = ({date,handleChange}) => {
    
    return (

        <Box sx={{ marginBottom: '1.5rem' }}>
        <CardHeader1 
            variant='h6'
            primaryText='When would you like us to clean?'
            subText='Please select an available date and time for your cleaning.
            If you cannot find a time that works for you, please contact us and we will do our best to accommodate you.'
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>


            <DatePicker 
                label="Date:"
                value={date.date}
                
                minDate={dayjs().startOf('day')}

                onAccept={(newValue) => {handleChange(newValue, 'date')}}
            />
 

            <MobileTimePicker 
            label="Time" 
            views={['hours']}

            minutesStep={60}

            viewRenderers={{
                hours: renderDigitalClockTimeView,
                minutes: renderDigitalClockTimeView,
                seconds: renderDigitalClockTimeView,
              }}

            minTime={dayjs().set('hour', 9).startOf('hour')}
            maxTime={dayjs().set('hour', 18).startOf('hour')}

            value={date.time}
            
            onAccept={(newValue) => {
                handleChange(newValue, 'time')}}
                        />
            </Box>

        </LocalizationProvider>
    </Box>

    )

}


DateSelectionForm.propTypes = {
    date: props.object.isRequired,
    handleChange: props.func.isRequired,
}


export default DateSelectionForm;