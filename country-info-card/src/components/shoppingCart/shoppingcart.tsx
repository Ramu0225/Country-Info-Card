import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
	},
}));

function ShoppingCartIcon({ quantity }: { quantity: number }) {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<AddShoppingCartIcon />
			<span>{quantity}</span>
		</section>
	);
}
export default ShoppingCartIcon;
