import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardActions } from "@material-ui/core";
import CountryTypography from "../components/card/cardTypography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fecthCountry } from "../redux/action";
import NestedList from "../components/dropdown/card-dropDownItems";
import NavigationBar from "../components/header.component/header-countryPage";
import { addToCart } from "../redux/action";
import { Country, State } from "../redux/type";

const useStyles = makeStyles({
	align1: {
		width: "300px",
		padding: "0",
		margin:"15px 0" ,
		background: "#eeeeee",
		boxShadow: "0 3px 4px 2px rgba(255, 105, 135, .3)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	align: {
		width: "100%",
		minHeight: "100vh",
		marginTop: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
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
	title: {
		textAlign:"center"
	},
	NavigationButton: {
		width: "110px",
		height: "36px",
		borderRadius: "4px",
		backgroundColor: "#fcd6d6",
		opacity: "0.9",
		margin: "10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"&:hover": {
			backgroundColor: "lightGray",
		},
	},
});
const languageString = (country: Country) => {
	return country.languages.map((l) => l.name).join(", ");
};
const borderString = (country: Country) => {
	if (!country.borders.length) {
		country.borders = ["None"];
		return "";
	} else {
		return country.borders.join(", ");
	}
};

function CountryPage() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const params: { id: string } = useParams();
	const name = params.id;
	const { country, error } = useSelector((state: State) => {
		return { country: state.country, error: state.countryError };
	});
	useEffect(() => {
		dispatch(fecthCountry(name));
	}, [dispatch, name]);
	const cartItem = useSelector((state: State) => {
		return state.cartItem;
	});
	return (
		<React.Fragment>
			<section>
				<NavigationBar />
			</section>
			<section className={classes.align}>
				{country.map((country, i) => (
					<Card key={i} className={classes.align1}>
						<h2 className={classes.title}>{country.name}</h2>
						<CountryTypography
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
							<section className={classes.NavigationButton}>
								<Link to="/" className={classes.link}>
									<p>Back</p>
								</Link>
							</section>
							<Button
								onClick={() => dispatch(addToCart(country))}
								className={classes.cartButton}
								disabled={!!cartItem.find((c:any) => c.name === country.name)}
							>
								BUY
							</Button>
						</CardActions>
					</Card>
				))}
				{!!error && <h1>{error}</h1>}
			</section>
		</React.Fragment>
	);
}
export default CountryPage;
