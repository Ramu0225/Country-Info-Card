import { Dispatch } from "react";
import { Country } from "./type";
export const addToCart = (country: Country) => {
	return {
		type: "ADD_COUNTRY",
		payload: country,
	};
};
export const themeMode = (mode: boolean) => {
	return {
		type: "CHANGE_MODE",
		payload: mode,
	};
};
export const sortByPopulation = () => {
	return {
		type: "SORT_BY_POPULATION",
	};
};
export const sortByCountryName = () => {
	return {
		type: "SORT_BY_COUNTRY_NAME",
	};
};
export const sortByRegion = () => {
	return {
		type: "SORT_BY_REGION",
	};
};
export const removeFromCart = (countryName: string) => {
	return {
		type: "REMOVE_COUNTRY",
		payload: countryName,
	};
};

export const searchCountry = (countryName: string) => {
	return {
		type: "SEARCH_COUNTRY",
		payload: countryName,
	};
};
export const fecthCountries = () => {
	return async (
		dispatch: Dispatch<{ type: string; payload: Array<Country> | string }>
	) => {
		try {
			const response = await fetch(
				`https://restcountries-v2.herokuapp.com/all`
			);
			const data = await response.json();
			dispatch(fecthCountriesSuccess(data));
		} catch (e: any) {
			dispatch(fecthCountriesError(e.toString()));
		}
	};
};
export const fecthCountriesSuccess = (data: Array<Country>) => {
	return {
		type: "FETCH_COUNTRIES_SUCCESS",
		payload: data,
	};
};
export const fecthCountriesError = (data: string) => {
	return {
		type: "FETCH_COUNTRIES_ERROR",
		payload: data,
	};
};
export const fecthCountry = (countryName: string) => {
	return async (
		dispatch: Dispatch<{ type: string; payload: Array<Country> | string }>
	) => {
		try {
			const response = await fetch(
				`https://restcountries-v2.herokuapp.com/country/${countryName}`
			);
			const data = await response.json();
			dispatch(fecthCountrySuccess(data));
		} catch (e: any) {
			dispatch(fecthCountryError(e));
		}
	};
};
export const fecthCountrySuccess = (data: Array<Country>) => {
	return {
		type: "FETCH_COUNTRY_SUCCESS",
		payload: data,
	};
};
export const fecthCountryError = (data: string) => {
	return {
		type: "FETCH_COUNTRY_ERROR",
		payload: data,
	};
};
