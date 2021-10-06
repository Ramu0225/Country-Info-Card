import { useSelector } from "react-redux";
import { State } from "../../redux/type";
import ShoppingCartIcon from "../shoppingCart/shoppingcart";

function CartIcon() {
	const cartItem = useSelector((state: State) => {
		return state.cart.cartItem;
	});
	return (
		<section color="success" >
			<ShoppingCartIcon quantity={cartItem?.length || 0} />
		</section>
	);
}
export default CartIcon;
