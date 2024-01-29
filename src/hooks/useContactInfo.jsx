import { useState } from "react";

export const useContactInfo = () => {
    
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            apt: '',
            city: '',
            notes: '',
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevState) => ({...prevState, [name]: value}));
        }
    
        return [formData, handleChange];
}