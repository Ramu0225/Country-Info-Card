// This hook is used to fetch one specific country
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthCountry } from '../redux/action';
import { AllState } from '../redux/type';

function UseCountryHook(countryName) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthCountry(countryName));
    }, [dispatch, countryName]);
    const {country, error }= useSelector((state: AllState) => {
		return {
			country: state.country.country,
			error: state.country.countryError,
		};
    });
	return [country, error];
}

export default UseCountryHook;
