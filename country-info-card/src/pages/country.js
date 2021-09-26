import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardActions, Button} from "@material-ui/core";
import CountryTypography from "../components/card/cardTypography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fecthCountry } from "../redux/action";
import NestedList from "../components/dropdown/dropdown";
import NavigationBar from "../components/navbar/navbar";
import { addToCart } from "../redux/action";

const useStyles = makeStyles({
	align1: {
		width: '300px',
		padding:'0',
		background: "#eeeeee",
		boxShadow: "0 3px 4px 2px rgba(255, 105, 135, .3)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		justifyContent:"center"
	},
	align: {
		width: '100%',
		height: '100vh',
		marginTop:'0',
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		justifyContent:"center"
	},
	cartButton: {
		color: "black",
		backgroundColor: "#31B73A",
		fontSize: "12px",
	},
	link: {
		margin: "2px",
		textDecoration: "none",
		color: "black",
		fontSize: "15px",
		fontFamily: "Roboto",
	},
	NavigationButton: {
		width: "110px",
		height: "36px",
		borderRadius: "4px",
		backgroundColor: "#fcd6d6",
		opacity:'0.9',
		margin: "10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"&:hover": {
			backgroundColor: "lightGray",
		}
	},
});
const languageString = (country) => {
	return country.languages.map((l) => l.name).join(", ");
};
const borderString = (country) => {
	if (!country.borders.length) {
		return (country.borders = ["None"]);
	} else {
		return country.borders.join(", ");
	}
};

function CountryPage() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const location = useLocation();
	const { name } = location.state;
	const [country, error] = useSelector((state) => {
		return [state.country, state.country_error];
	});
	useEffect(() => {
		dispatch(fecthCountry(name));
	}, [dispatch, name]);
const cartItem = useSelector((state) => {
	return state.cartItem;
});
	return (
		<React.Fragment>
			<div>
				<NavigationBar />
			</div>
			<div className={classes.align}>
				{country.map((country, i) => (
					<Card key={i} className={classes.align1}>
						<h2 align="center">{country.name}</h2>
						<CountryTypography
							isHomePage="false"
							rowElements={[{ name: country.flag, isImage: true }]}
						/>
						<NestedList
							countryElements={[
								{ name: country.nativeName, property: "Native Name" },
								{ name: country.capital, property: "Capital" },
								{ name: country.region, property: "Region" },
								{ name: borderString(country), property: "Borders" },
								{ name: languageString(country), property: "Languages" },
							]}
						/>
						<CardActions>
							<div className={classes.NavigationButton}>
								<Link to="/" className={classes.link}>
									<p>Back To Home</p>
								</Link>
							</div>
							<Button
								onClick={() => dispatch(addToCart(country))}
								className={classes.cartButton}
								disabled={cartItem.find((c) =>
									c.name === country.name ? true : false
								)}
							>
								BUY
							</Button>
						</CardActions>
					</Card>
				))}
				{!!error && <h1>{error}</h1>}
			</div>
		</React.Fragment>
	);
}
export default CountryPage;
