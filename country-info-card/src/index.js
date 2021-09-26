import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import storeFactory from './redux/store'
import { BrowserRouter } from "react-router-dom";

const reduxStore = storeFactory();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>			
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
