import {useState} from 'react';

import dayjs from 'dayjs';

export const useDateChange = () => {
        //Setup Date State
        const [date, setDate] = useState({
            date: dayjs(),
            time: dayjs(),
        });
    
        // Handle Date Change
        const handleDateChange = (newValue, name) => {

            setDate((prevState) => ({...prevState, [name]: newValue}));
        }
        
        return [date, handleDateChange];
}