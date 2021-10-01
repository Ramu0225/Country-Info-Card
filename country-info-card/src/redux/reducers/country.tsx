import { ActionTypes, IActions, FetchState } from "../type";

const DEFAULT_STATE: FetchState = {
	data: [],
	countries: [],
	country: [],
	countriesError: "",
	countryError: "",
};

const countryReducer = (state = DEFAULT_STATE, action: IActions) => {
	switch (action.type) {
		case ActionTypes.fetchCountriesSuccess:
			const countries = action.payload;
			return {
				...state,
				countries,
				data: countries,
			};
		case ActionTypes.fetchCountriesError:
			const countries_error = action.payload;
			return {
				...state,
				countries_error,
			};
		case ActionTypes.fetchCountrySuccess:
			const country = action.payload;
			return {
				...state,
				country,
			};
		case ActionTypes.fetchCountryError:
			const country_error = action.payload;
			return {
				...state,
				country_error,
			};
		case ActionTypes.searchCountry:
			const name = action.payload;
			return {
				...state,
				countries: state.data.filter((country) =>
					country.name.toLowerCase().includes(name.toLowerCase())
				),
			};
		case ActionTypes.sortByPopulation:
			return {
				...state,
				countries: state.countries?.sort(
					(s1, s2) => s2.population - s1.population
				),
			};
		case ActionTypes.sortByRegion:
			return {
				...state,
				countries: state.countries?.sort((s1, s2) => {
					const nameA = s1.region.toLowerCase();
					const nameB = s2.region.toLowerCase();
					return nameA > nameB ? -1 : 1;
				}),
			};
		case ActionTypes.sortByCountryName:
			return {
				...state,
				countries: state.countries?.sort((s1, s2) => {
					const nameA = s1.name.toLowerCase();
					const nameB = s2.name.toLowerCase();
					return nameA > nameB ? 1 : -1;
				}),
			};

		default:
			return state;
	}
};
export default countryReducer;
