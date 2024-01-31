import { Box } from '@mui/material';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, MobileTimePicker, renderDigitalClockTimeView } from '@mui/x-date-pickers';

import CardHeader1 from '../CardHeader1';

import { useEffect, useState } from 'react';
import { useGetData } from '../../hooks/useGetData';


import props from 'prop-types';


const DateSelectionForm = ({date, handleChange}) => {

    //Date Format: YYYY-MM-DD
    //Time Format: HH:MM:SS

    const { data: appointment } = useGetData('booking/appointments');
    const prevBookings = appointment?.appointments;

    const [disabledTimes, setDisabledTimes] = useState([]);


    useEffect(() => {
      if (prevBookings) {

        const formattedBookings = [];

        Object.values(prevBookings).forEach( (booking) => {

            // Skip bookings before today
            if (dayjs(booking.bookingDate).isBefore(dayjs(), 'day')) {
                return;
            }

            // Add the date and times of the booking and its duration to the formattedBookings array
            for (let i = 0; i < booking.bookingDuration; i++) {

                let hour = booking.bookingTime.split(':')[0];
                let reservedHour = parseInt(hour) + i;
                let reservedTimes = `${reservedHour}:00:00`;

                formattedBookings.push ({
                    date: dayjs(booking.bookingDate).format('YYYY-MM-DD'),
                    time: reservedTimes,
                })
            }
        });

        setDisabledTimes(formattedBookings);
      }
    }, [prevBookings]);
          
        
    
    return (

        <Box sx={{ marginBottom: '1.5rem' }}>
        <CardHeader1 
            varient='h6'
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
                
                disablePast

                onAccept={(newValue) => {handleChange(newValue, 'date')}}
            />
 

            <MobileTimePicker 
                label="Time" 
                views={['hours']}
                value={date.time}

                minutesStep={60}

                viewRenderers={{
                    hours: renderDigitalClockTimeView,
                    minutes: renderDigitalClockTimeView,
                    seconds: renderDigitalClockTimeView,
                }}
                
                onAccept={(newValue) => {handleChange(newValue, 'time')}}

                minTime={dayjs().set('hour', 9).startOf('hour')}
                maxTime={dayjs().set('hour', 18).startOf('hour')}



                shouldDisableTime={(timeValue, viewType) => {
                    if (viewType === 'hours') {

                      // Check if the selected date has a disabled time
                      const disabledTime = disabledTimes.find( (item) => 
                            item.date === date.date.format('YYYY-MM-DD') &&
                            item.time === `${timeValue.$H}:00:00`
                      );
                        // If there is a disabled time, disable it
                        return !!disabledTime;
                    }
                    return false;
                  }}
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