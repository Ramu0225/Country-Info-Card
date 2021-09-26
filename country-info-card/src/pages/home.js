import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountriesCardContent from '../components/card/cardContent';
import Header from '../components/header.component/header';

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
			<div className={classes.align}>
				<CountriesCardContent />
			</div>
		</React.Fragment>
	);
}

export default HomePage;
