// This hook is used to fetch all countries
import { useEffect} from 'react';
import { StateCombiner } from '../redux/type';
import { useDispatch, useSelector} from 'react-redux';
import { fecthCountries } from '../redux/action';
import { AllState } from '../redux/type';

function UseCountriesHook() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthCountries());
    }, [dispatch]);

    const {countries, error} = useSelector((state: AllState) => {
        return {
            countries : state.country.countries,
            error : state.country.countriesError,
        };
    });
    return [countries, error];
}
    
    export default UseCountriesHook;