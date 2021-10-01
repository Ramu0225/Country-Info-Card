export interface AllState{
	cart: CartState;
	country: FetchState;
	theme: ThemeState
}
export interface RowElement {
	name: string;
	isImage?: boolean;
	isTitle?: boolean;
	isPopulation?: boolean;
}
export interface CountryElement {
	name: string | number;
	property: string;
}
export interface Country {
	name: string;
	population: number;
	region: string;
	borders: Array<string>;
	languages: Array<{ name: string }>;
	flag: string;
	nativeName: string;
	capital: string;
	currencies: Array<{ name: string }>;
	timeZones: Array<string>;
}
export interface FetchState {
	data: Array<Country>;
	countries: Array<Country> | undefined;
	country: Array<Country> | undefined;
	countriesError: string | any;
	countryError: string;
}

export interface CartState {
	cartItem: Array<Country> | undefined ;
}

export interface ThemeState {
	Theme: Boolean;
}
export interface AddCountryAction {
	type: ActionTypes.addCountry;
	payload: Country;
}

export interface ChangeModeAction {
	type: ActionTypes.changeMode;
	payload: Boolean;
}
export interface SortByPopulationAction {
	type: ActionTypes.sortByPopulation;
}
export interface SortByCountryNameAction {
	type: ActionTypes.sortByCountryName;
}
export interface SortByRegionAction {
	type: ActionTypes.sortByRegion;
}
export interface RemoveCountryAction {
	type: ActionTypes.removeCountry;
	payload: string;
}
export interface SearchCountryAction {
	type: ActionTypes.searchCountry;
	payload: string;
}
export interface FetchCountriesSuccessAction {
	type: ActionTypes.fetchCountriesSuccess;
	payload: Array<Country>;
}
export interface FetchCountrySuccessAction {
	type: ActionTypes.fetchCountrySuccess;
	payload: Array<Country>;
}
export interface FetchCountriesErrorAction {
	type: ActionTypes.fetchCountriesError;
	payload: any;
}
export interface FetchCountryErrorAction {
	type: ActionTypes.fetchCountryError;
	payload: any;
}
export type IActions =
	| AddCountryAction
	| ChangeModeAction
	| FetchCountryErrorAction
	| FetchCountriesErrorAction
	| FetchCountrySuccessAction
	| FetchCountriesSuccessAction
	| SearchCountryAction
	| RemoveCountryAction
	| SortByRegionAction
	| SortByCountryNameAction
	| SortByPopulationAction;

export enum ActionTypes {
	addCountry = "ADD_COUNTRY",
	changeMode = "CHANGE_MODE",
	sortByPopulation = "SORT_BY_POPULATION",
	sortByCountryName = "SORT_BY_COUNTRY_NAME",
	sortByRegion = "SORT_BY_REGION",
	removeCountry = "REMOVE_COUNTRY",
	searchCountry = "SEARCH_COUNTRY",
	fetchCountriesSuccess = "FETCH_COUNTRIES_SUCCESS",
	fetchCountriesError = "FETCH_COUNTRIES_ERROR",
	fetchCountrySuccess = "FETCH_COUNTRY_SUCCESS",
	fetchCountryError = "FETCH_COUNTRY_ERROR",
}
