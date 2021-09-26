import React, { useEffect } from "react";
import { Button, Card } from "@material-ui/core";
import CountryTypography from "./cardTypography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action";
import { fecthCountries } from "../../redux/action";

const useStyles = makeStyles({
	root: {
		padding: "0",
		background: "#eeeeee",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		margin: "20px",
	},
	column: {
		padding: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	row: {
		padding: "0px",
		margin: "0 auto",
		width: "80%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	cartButton: {
		margin: "5px",
		color: "black",
		backgroundColor: "#31B73A",
		fontSize: "12px",
	},
});

function CountriesCardContent() {
	const dispatch = useDispatch();
	const [countries, error] = useSelector((state) => {
		return [state.countries, state.error];
	});
	useEffect(() => {
		if (!countries.length) {
			dispatch(fecthCountries());
		}
	}, [dispatch, countries]);
	const cartItem = useSelector((state) => {
		return state.cartItem;
	});
	const classes = useStyles();
	return (
		<div className={classes.row}>
			{!!countries.length &&
				countries.map((country) => (
					<Card
						key={country.name}
						className={`${classes.root} ${classes.column}`}
					>
						<CountryTypography
							isHomePage="true"
							rowElements={[
								{ name: country.flag, isImage: true },
								{ name: country.name, isTitle: true },
								{ name: `${country.population}`, isPopulation: true },
								{ name: `${country.region}` },
								{ name: `${country.languages[0].name}` },
							]}
						/>
						<Button
							onClick={() => dispatch(addToCart(country))}
							align="justify"
							className={classes.cartButton}
							key={country.name}
							disabled={cartItem.find((c) => (c.name === country.name ? true : false))}
						>
							BUY
						</Button>
					</Card>
				))}
			{!!error && <h1>{error}</h1>}
		</div>
	);
}

export default CountriesCardContent;
