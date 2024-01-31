import { useState } from 'react';

export const useCreateBooking = () => {
    
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const createBooking = async (formData, date) => {
        
        setLoading(true); // Set loading to true while the request is being made
        const URL = import.meta.env.VITE_API_URL;


        try {
            const response = await fetch (URL + 'booking/create', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    apt: formData.apt,
                    city: formData.city,
                    notes: formData.notes,
                    date: date.date.format('MM/DD/YYYY'),
                    time: date.time.format('h:mm A'),
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setBooking(data);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }

    }

    return { booking, loading, error, createBooking };
};

