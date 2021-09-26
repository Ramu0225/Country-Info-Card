import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/type";
import ShoppingCartIcon from "../shoppingCart/shoppingcart";

function CartIcon() {
	const cartItem = useSelector((state: State) => {
		return state.cartItem;
	});
	return (
		<div color="success">
			<ShoppingCartIcon quantity={cartItem.length} />
		</div>
	);
}
export default CartIcon;