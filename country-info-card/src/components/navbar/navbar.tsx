import { Link } from "react-router-dom";
import HomeButton from "../customButton/home-icon";
import { makeStyles } from "@material-ui/core/styles";
import CartItemPage from "../../pages/cart-item-page";

const useStyles = makeStyles({
	icon: {
		width: '100px',
	},
	navbar:{
		width: '100%',
		backgroundColor: 'rgb(240, 226, 226)',
		opacity: '0.7',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
	}
});
function NavigationBar() {
	const classes = useStyles();
	return (
		<section className={classes.navbar}>
			<Link to={`/`}>
				<HomeButton />
			</Link>
			<section className={classes.icon}>
				<CartItemPage />
			</section>
		</section>
	);
}

export default NavigationBar;
