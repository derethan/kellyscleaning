import { useState } from 'react';

export const useCreateBooking = () => {


    const createBooking = (formData, date) => {

        fetch ('http://localhost:3000/booking/create', {
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
            })
            .then((response) => response.json())

            .then((data) => {
                console.log('Success:', data.bookingId);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return { createBooking };

};

