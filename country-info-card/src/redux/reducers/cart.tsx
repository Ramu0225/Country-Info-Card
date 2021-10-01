import { Country, IActions, CartState, ActionTypes } from "../type";

const DEFAULT_STATE: CartState = {
	cartItem: [],
};

const cartReducer = (state = DEFAULT_STATE, action: IActions) => {
	switch (action.type) {
		case ActionTypes.addCountry:
			const addCountry: Country = action.payload;
			const addName = addCountry.name;
			const existCountry = state.cartItem?.find(
				(country: any) => addName === country.name
			);
			if (existCountry) {
				return state;
			} else {
				return {
					...state,
					cartItem: [...(state.cartItem || []), addCountry],
				};
			}
		case ActionTypes.removeCountry:
			const countryName = action.payload;
			return {
				...state,
				cartItem: state.cartItem?.filter(
					(country: any) => countryName !== country.name
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
