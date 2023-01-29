
import { useState, useEffect } from "react";

const useFetch = (url) => {

    
    let [isLoading, setIsLoading ] = useState(true); // present loading message while fetching data
    let [data, setData ] = useState(null); // present fetched data
    let [error, setError ] = useState(null); // present error if occures


    // fetch data on first render using useEffect
    const fetchData = async (url) => {
        try {
            
            const res = await fetch(url); // fetch data
            if(!res.ok){ // if endpoint is faulty:
            throw new Error('invalid endpoint!')
            }
            const data = await res.json(); // convert to JSON format
            setData(data); // update the data list
            setIsLoading(false); // update loading status to 'false' 
            setError(null); // update error status 'null'  

        } catch (error) { // in case of errors:
            setIsLoading(false); // update loading status to 'false' 
            setError(error.message); // update error state and present on screen  
            setData(null); // hide data
        }
        };
        
        useEffect(() => { // fetch data on initial render
        fetchData('https://api.npoint.io/31c03301cf7db1410ee6');
        }, [url]);

        return { data, isLoading, error }
}

export default useFetch;