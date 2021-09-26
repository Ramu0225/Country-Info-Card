import React from 'react';
import {  CardContent, CardMedia, makeStyles, TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PeopleIcon from "@mui/icons-material/People";
const useStyles = makeStyles({
	align: {
		padding: "0",
		margin: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	btn: {
		textColor: "#000000",
		backgroundColor: "#fcd6d6",
		fontSize: "12px",
	},
	title: {
		fontWeight: "bold",
		fontSize:"25px",
	},
	img: {
		width:'100%',
		margin: "0",
		padding: '0',
		backgroundSize: "cover",
	},
	link: {
		margin: "2px",
		color: "green",
		fontSize: "25px",
		fontFamily: "Roboto",
	}
});

function CountryTypography({rowElements}) {
  const classes = useStyles();
    return (
			<React.Fragment>
				{rowElements.map((r, i) => (
					<CardContent key={i} className={classes.align}>
						{r.isImage && (
							<CardMedia className={classes.img} align="center">
								<img src={r.name} alt="flag" width="300px" height="200px" />
							</CardMedia>
						)}
						<TableRow>
							{!r.isImage && r.isTitle && (
								<TableCell
									className={classes.title}
									align="center"
									
								>
									<Link
										className={classes.link}
										to={{
											pathname: `/country/${rowElements[1].name}`,
											state: { name: rowElements[1].name },
										}}
									>
										{r.name}
									</Link>
								</TableCell>
							)}
							{!r.isImage && !r.isTitle && r.isPopulation &&(
								<>
									<TableCell >
										{r.name} <PeopleIcon sx={{ pl: 2,  }} />
									</TableCell>
								</>
							)}
							{!r.isImage && !r.isTitle && !r.isPopulation &&
								(
									<>
										<TableCell>
											{r.name}  
										</TableCell>
									</>
								)
							}
						</TableRow>
					</CardContent>
				))}
			</React.Fragment>
		);
}

export default CountryTypography;