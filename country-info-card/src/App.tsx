import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CountryPage from "./pages/country";
import { useSelector } from "react-redux";
import { State} from "./redux/type";

function App() {
	const themeMode = useSelector((state: State) => {
		return state.theme.Theme;
	});
	return (
		<section className={!themeMode ? "Dark" : "App"}>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/country/:id" component={CountryPage} />
      </Switch>
      
		</section>
	);
}

export default App;
