
import { useState, useEffect } from "react";

const useFetch = (url) => {

    
    let [isLoading, setIsLoading ] = useState(true); // present loading message while fetching data
    let [data, setData ] = useState(null); // present fetched data
    let [error, setError ] = useState(null); // present error if occures


    // fetch data on first render using useEffect
    // set a new abort controller and assosiate it with a fetch request
    const fetchData = async (url) => {

        const controller = new AbortController();
        const signal = controller.signal;
        try {
            
            const res = await fetch(url, { signal }); // fetch data
            
            if(!res.ok){ // if endpoint is faulty:
                throw new Error('invalid endpoint!')
            }

            const data = await res.json(); // convert to JSON format
            setData(data); // update the data list
            setIsLoading(false); // update loading status to 'false' 
            setError(null); // update error status 'null'  

        } catch (error) { // in case of errors:
            if(error.name === 'AbortError'){
                console.log('fetch aborted')
                return
            } else{
                setIsLoading(false); // update loading status to 'false' 
                setError(error.message); // update error state and present on screen  
                setData(null); // hide data
            }
        }
    };
    
    useEffect(() => { // fetch data on initial render
        fetchData(url);
        }, [url]);

        return { data, isLoading, error }
}

export default useFetch;