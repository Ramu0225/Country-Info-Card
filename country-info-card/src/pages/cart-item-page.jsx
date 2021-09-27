import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CartIcon from "../components/icons/cart-icon";
import { useDispatch, useSelector } from "react-redux";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { removeFromCart } from "../redux/action";
import { TableBody } from "@material-ui/core";
import CountryTableRow from "../components/countryTableFormat/tableRow";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles({
	align: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		background: "#eeeeee",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
	},
	items: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	cartButton: {
		width:'25%',
		color: "success",
	},
	title: {
		fontSize: '16px',
		fontWeight:'bolder'
	},
	style1: {
		position: "absolute",
		overflowY: "scroll",
		padding: "20px",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "480px",
		height: "600px",
		backgroundColor: "#F0E2E2",
		opacity: '0.95',
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	},
});

function CartItemPage() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const cartItem = useSelector((state) => {
		return state.cartItem;
	});
	
	
  const country = cartItem;
  
	return (
		<section>
			<Button onClick={handleOpen} variant="outlined" color="success">
				<CartIcon />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={classes.style1}>
					<Button onClick={handleClose}>
						<CloseIcon />
						Close
					</Button>
					<section>
						<h3>List of items to shop:</h3>
						{(cartItem.length === 0 )? (
							"No items in the cart to display"
						) : (
							<section>
								{country.map((country, i) => (
									<section key={i} className={classes.items}>
										<TableBody>
											<CountryTableRow
												rowElements={[
													{ name: country.flag, isImage: true },
													{ name: country.name, isTitle: true },
												]}
											/>
										</TableBody>
										<Button
											onClick={() => dispatch(removeFromCart(country.name))}
											className={classes.cartButton}
											variant="outlined"
											color="error"
											size="small"
											key={country.name}
										>
											Remove <DeleteForeverOutlined />
										</Button>
									</section>
								))}
							</section>
						)}
					</section>
				</Box>
			</Modal>
		</section>
	);
}
export default CartItemPage;