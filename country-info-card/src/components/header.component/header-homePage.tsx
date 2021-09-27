import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import HomeButton from "../icons/home-icon";
import CartItemPage from '../../pages/cart-item-page';
import ThemeSwitch from '../icons/theme-icon';
import SearchInput from '../searchInputField/searchInput';
import SortCountryBy from '../sortBy/sort-country-by';
import { useDispatch } from "react-redux";
import { fecthCountries } from "../../redux/action";

const useStyles = makeStyles({
	icon: {
		width: "250px",
		marginRight: "20px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	header: {
		width: "100%",
		position: "sticky",
		top: "0",
		backgroundColor: "rgb(240, 226, 226)",
		opacity: "0.8",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	main: {
		position: "sticky",
		top: "0",
	},
	align2: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();
	return (
		<section className={classes.main}>
			<section className={classes.header}>
				<Link to={`/`} onClick={() => dispatch(fecthCountries())}>
					<HomeButton />
				</Link>
				<section className={classes.icon}>
					<CartItemPage />
					<ThemeSwitch />
				</section>
			</section>
			<section className={classes.align2}>
				<SearchInput />
				<SortCountryBy />
			</section>
		</section>
	);
}

export default Header;