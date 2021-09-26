// This hook is used to fetch one specific country
import { useEffect, useState } from 'react';

function UseCountryHook(countryName) {
    const[country, setCountry] = useState([]);
    const[error, setError] = useState("");
   
    useEffect(() => {
        getCountry(countryName);
    }, [countryName]);

    const getCountry = async (countryName) => {
        try { 
            const response =  await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
            const data = await response.json();
            setCountry(data);
            setError("");
        }
        catch(e){
            setError("something went wrong");
            setCountry([]);
        }
    }
    return [country, error];
}
export default UseCountryHook;
