// This hook is used to fetch one specific country
import UseCountriesHook from "./useCountries";

function UseCountryHook1(countryName) {
    const [countries] = UseCountriesHook();
    const country = countries.filter((c)=> c.name === countryName);
    return [country];
}

export default UseCountryHook1;
