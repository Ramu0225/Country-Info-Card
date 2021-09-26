import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import UseCountriesHook from '../../custom-hooks/useCountries';
import CountryTableRow from './tableRow';

const languageString = (country) => {
    return country.languages.map((l) => l.name).join(", ");
}

function CountriesTableBody() {
    const [countries, error] = UseCountriesHook();
    return (
        <React.Fragment>
            {!!countries.length && (
                <TableBody>
                    {countries.map((country) => (
                        <CountryTableRow 
                            key={country.name} 
                            rowElements={[{name: country.flag, isImage: true},
                            {name: country.name}, {name: country.population}, 
                            {name:country.region}, {name: languageString(country)}]}
                        />
                    ))}
                </TableBody>
            )}
            {
                !!error &&
                <h1>{error}</h1>
            }
        </React.Fragment>
    );
}

export default CountriesTableBody;