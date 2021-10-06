import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/cart";
import countryReducer from "./reducers/country";
import loaderReducer from "./reducers/loader";
import themeReducer from "./reducers/theme";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "theme"]
};

const rootReducer = combineReducers({
	cart: cartReducer,
	country: countryReducer,
	theme: themeReducer,
	show:loaderReducer,
});

export default persistReducer(persistConfig, rootReducer);
