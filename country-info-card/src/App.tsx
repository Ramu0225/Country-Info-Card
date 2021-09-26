import React from "react";
import "./App.css";
import { Switch, Route, useParams } from "react-router-dom";
import HomePage from "./pages/home";
import CountryPage from "./pages/country";
import { useSelector } from "react-redux";
import { State } from "./redux/type";

function App() {
	const themeMode = useSelector((state: State) => {
		return state.Theme;
	});
	return (
		<div className={!themeMode ? "Dark" : "App"}>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/country/:id" component={CountryPage} />
			</Switch>
		</div>
	);
}
function Child() {
	let id: string = useParams();
	console.log({ id });
}
export default App;
