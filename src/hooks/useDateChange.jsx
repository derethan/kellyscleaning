import {useState} from 'react';

import dayjs from 'dayjs';

export const useDateChange = () => {
        //Setup Date State
        const [date, setDate] = useState({

            // Set the date to today
            date: dayjs().add(1, 'day'),

            // Set the time to the next hour, round down
            time: dayjs().add(1, 'hour').startOf('hour')
        });
    
        // Handle Date Change
        const handleDateChange = (newValue, name) => {

            setDate((prevState) => ({...prevState, [name]: newValue}));
        }
        
        return [date, handleDateChange];
}