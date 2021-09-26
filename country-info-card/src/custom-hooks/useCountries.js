// This hook is used to fetch all countries
import { useEffect, useState } from 'react';

function UseCountriesHook() {
    const[countries, setCountries] = useState([]);
    const[error, setError] = useState("");

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = () => {
        try { 
            fetch(`https://restcountries.com/v2/all`, { method:'POST', mode: 'no-cors' })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    return data;
                }
            )
        }
        catch(e){
            setError("something went wrong");
        }
    }
    return [countries, error];
}
export default UseCountriesHook;