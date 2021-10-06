import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountriesCardContent from '../components/card/cardContent';
import Header from '../components/header.component/header-homePage';
import Loader from '../components/loader/loader';

const useStyles = makeStyles({
	align: {
		minHeight: "100vh",
		marginTop: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});

function HomePage() {
  const classes = useStyles();  
	return (
		<React.Fragment>
			<Header />
			<section className={classes.align}>
				<Loader />
				<CountriesCardContent  />
			</section>
		</React.Fragment>
	);
}

export default HomePage;
