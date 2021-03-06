import { Dispatch } from "react";
import { Country, ActionTypes } from "./type";

export const addToCart = (country: Country) => {
	return {
		type: ActionTypes.addCountry,
		payload: country,
	};
};
export const themeMode = (mode: boolean) => {
	return {
		type: ActionTypes.changeMode,
		payload: mode,
	};
};
export const showLoader = (show: boolean) => {
	return {
		type: ActionTypes.showLoader,
		payload: show,
	};
}

export const sortByPopulation = () => {
	return {
		type: ActionTypes.sortByPopulation,
	
	};
};
export const sortByCountryName = () => {
	return {
		type: ActionTypes.sortByCountryName,
	};
};
export const sortByRegion = () => {
	return {
		type: ActionTypes.sortByRegion,
	};
};
export const removeFromCart = (countryName: string) => {
	return {
		type: ActionTypes.removeCountry,
		payload: countryName,
	};
};

export const searchCountry = (countryName: string) => {
	return {
		type: ActionTypes.searchCountry,
		payload: countryName,
	};
};
export const fecthCountries = () => {
	return async (
		dispatch: Dispatch<{
			type: string | boolean;
			payload: Array<Country> | string | boolean;
		}>
	) => {
		dispatch(showLoader(true));
		try {
			const response = await fetch(`https://restcountries-v2.herokuapp.com/all`);
			const data = await response.json();
			dispatch(fecthCountriesSuccess(data));
			dispatch(showLoader(false));
		} 
		catch (e: any) {
			dispatch(fecthCountriesError(e.toString()));
		}
	};
};
export const fecthCountriesSuccess = (data: Array<Country>) => {
	return {
		type: ActionTypes.fetchCountriesSuccess,
		payload: data,
	};
};
export const fecthCountriesError = (data: string) => {
	return {
		type: ActionTypes.fetchCountriesError,
		payload: data,
	};
};
export const fecthCountry = (countryName: string) => {
	return async (
		dispatch: Dispatch<{ type: string; payload: Array<Country> | string | boolean}>
	) => {
		dispatch(showLoader(true));
		try {
			const response = await fetch(`https://restcountries-v2.herokuapp.com/country/${countryName}`);
			const data = await response.json();
			dispatch(fecthCountrySuccess(data));
			dispatch(showLoader(false));
		} catch (e: any) {
			dispatch(fecthCountryError(e));
		}
	};
};
export const fecthCountrySuccess = (data: Array<Country>) => {
	return {
		type: ActionTypes.fetchCountrySuccess,
		payload: data,
	};
};
export const fecthCountryError = (data: string) => {
	return {
		type: ActionTypes.fetchCountryError,
		payload: data,
	};
};
