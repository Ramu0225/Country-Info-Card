
export const addToCart = (country) => {
	return {
		type: "ADD_COUNTRY",
		payload: country,
	};
};
export const themeMode = (mode) => {
	console.log(mode);
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
export const removeFromCart = (countryName) => {
	return {
		type: "REMOVE_COUNTRY",
		payload: countryName,
	};
};

export const searchCountry = (countryName) => {
	return {
		type: "SEARCH_COUNTRY",
		payload: countryName,
	};
};
export const fecthCountries = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(`https://restcountries-v2.herokuapp.com/all`);
			const data = await response.json();
			dispatch(fecthCountriesSuccess(data));
		} catch (e) {
			dispatch(fecthCountriesError(e.toString()));
		}
	};
};
export const fecthCountriesSuccess = (data) => {
	return {
		type: "FETCH_COUNTRIES_SUCCESS",
		payload: data,
	};
};
export const fecthCountriesError = (data) => {
	return {
		type: "FETCH_COUNTRIES_ERROR",
		payload: data,
	};
};
export const fecthCountry = (countryName) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`https://restcountries-v2.herokuapp.com/country/${countryName}`);
			const data = await response.json();
			dispatch(fecthCountrySuccess(data));
		} catch (e) {
			dispatch(fecthCountryError(e.toString()));
		}
	};
};
export const fecthCountrySuccess = (data) => {
	return {
		type: "FETCH_COUNTRY_SUCCESS",
		payload: data,
	};
};
export const fecthCountryError = (data) => {
	return {
		type: "FETCH_COUNTRY_ERROR",
		payload: data,
	};
};


