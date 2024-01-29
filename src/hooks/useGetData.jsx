import { useState, useEffect } from "react";

export const useGetData = (endpoint) => {

    // Setup State
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {    

            // Fetch Booking Data
            const getData = async () => {
                const URL = import.meta.env.VITE_API_URL;

                setLoading(true);
                try {
                    // Fetch Data
                    const responce = await fetch(URL + endpoint, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
    
                    // Throw Error if responce is not ok
                    if (!responce.ok) {
                        throw new Error(`HTTP Error: ${responce.status}`);
                    } 
    
                    // Return Data
                    const data = await responce.json();
                    setData(data);
                
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);

                }
            };

            getData();
    }, [endpoint]);
            

    return { data, loading, error };
};

