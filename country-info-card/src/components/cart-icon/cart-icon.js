import React from "react";
import {  useSelector } from "react-redux";
import ShoppingCartIcon from "../shoppingCart/shoppingcart";

function CartIcon() {
    const cartItem = useSelector((state) => {
        return state.cartItem;
    })
    return (
		<div variant="contained" color="success">
			<ShoppingCartIcon quantity={cartItem.length}  />
		</div>
	);
}
export default CartIcon;