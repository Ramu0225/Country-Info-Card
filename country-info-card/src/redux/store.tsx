import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
