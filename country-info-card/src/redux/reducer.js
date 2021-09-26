const INITIAL_STATE = {
  cartItem: [],
  data:[],
	countries: [],
	country:[],
	countries_error: "",
	country_error: "",
	Theme: Boolean,
	BuyButtonDisable:false,

};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "ADD_COUNTRY":
			const addCountry = action.payload;
			const addName = addCountry.name;
			const existCountry = state.cartItem.find((country) => {
				if (addName === country.name) {
					return true;
				}
				return false;
			});
			if (existCountry) {
				return state;
			} else {
				return {
					...state,
					cartItem: [...state.cartItem, addCountry],
					
				};
			}
		case "REMOVE_COUNTRY":
			const countryName = action.payload;
			return {
				...state,
				cartItem: state.cartItem.filter(
					(country) => countryName !== country.name
				),
			
			};
		case "CHANGE_MODE":
			const changeMode = action.payload;
			console.log(changeMode);
			return {
				...state,
				Theme: !state.Theme,
			}
		case "FETCH_COUNTRIES_SUCCESS":
			const countries = action.payload;
			return {
				...state,
				countries,
				data: countries,
			};
		case "FETCH_COUNTRIES_ERROR":
			const countries_error = action.payload;
			return {
				...state,
				countries_error,
				Theme:state.Theme,
			};
		case "FETCH_COUNTRY_SUCCESS":
			const country = action.payload;
			return {
				...state,
				country,
				Theme:state.Theme,
			};
		case "FETCH_COUNTRY_ERROR":
			const country_error = action.payload;
			return {
				...state,
				country_error,
			};
		case "SEARCH_COUNTRY":
			const name = action.payload;
			return {
				...state,
				countries: state.data.filter((country) =>
					country.name.toLowerCase().includes(name.toLowerCase())
				),
				
			};
		case "SORT_BY_POPULATION":
			return {
				...state,
				countries: state.countries.sort(
					(s1, s2) => s2.population - s1.population
				),
			};
		case "SORT_BY_REGION":
			return {
				...state,
				countries: state.countries.sort((s1, s2) =>  {
					const nameA = s1.region.toLowerCase();
					const nameB = s2.region.toLowerCase();
					return nameA > nameB ? -1 : 1;
				})
			};
		case "SORT_BY_COUNTRY_NAME":
			return {
				...state,
				countries: state.countries.sort((s1, s2) => {
					const nameA = s1.name.toLowerCase();
					const nameB = s2.name.toLowerCase();
					return nameA > nameB ? 1 : -1;
				})
			};
	
		default:
			return state;
	}
};
export default reducer;
