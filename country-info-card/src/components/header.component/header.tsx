import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import HomeButton from "../customButton/home-icon";
import CartItemPage from '../../pages/cart-item-page';
import ThemeSwitch from '../customButton/mui-theme';
import SearchInput from '../searchInputField/searchInput';
import SortCountryBy from '../customButton/sort-country-by';

const useStyles = makeStyles({
	icon: {
		width: '190px',
		marginRight: "20px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	header:{
		width: '100%',
		position: 'sticky',
		top: '0',
		backgroundColor: 'rgb(240, 226, 226)',
		opacity: '0.8',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
	return (
		<section className={classes.header}>
			<Link to={`/`}>
				<HomeButton />
			</Link>
			<section className={classes.align2}>
				<SearchInput />
				<SortCountryBy />
			</section>
			<section className={classes.icon}>
				<CartItemPage />
				<ThemeSwitch />
			</section>		
		</section>
	);
}

export default Header;