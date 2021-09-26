import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CountryTableRow from '../countryTableFormat/tableRow';
import { CardContent } from '@material-ui/core';
import UseCountriesHook from '../../custom-hooks/useCountries';

const useStyles = makeStyles({
  root:{
    minWidth: 275,
    background: "#ffffff",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  title:{
    fontSize: 14,
  }
});
const languageString =  (country) => {
  return country.languages.map((l) => l.name).join(", ");
}

function CountryCard() {
  const classes = useStyles();
  const [countries, error] = UseCountriesHook();
  return (
    <Card className={`${classes.root} ${classes.row}`}>
      {!!countries.length && (
          <CardContent>
              {countries.map((country) => (
                  <CountryTableRow 
                    key={country.name} 
                    rowElements={[{name: country.flag, isImage: true},
                    {name: country.name}, {name: country.population}, 
                    {name:country.region}, {name: languageString(country)}]}
                  />
                ))
              }
          </CardContent>
      )}
      {!!error &&
        <h1>{error}</h1>
      }
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default CountryCard;