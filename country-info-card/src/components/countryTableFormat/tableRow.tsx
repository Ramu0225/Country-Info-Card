import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { RowElement } from "../../redux/type";

const useStyles = makeStyles({
	link: {
		margin: "2px",
		color: "green",
		fontSize: "15px",
		fontFamily: "Roboto",
	},
});
function CountryTableRow({ rowElements }: { rowElements: Array<RowElement> }) {
	const classes = useStyles();
	return (
		<TableRow>
			{rowElements.map((r, i) => (
				<React.Fragment key={i}>
					{r.isImage && (
						<TableCell align="center">
							<img src={r.name} alt="flag" width="90" height="90" />
						</TableCell>
					)}
					{!r.isImage && (
						<TableCell align="left">
							<Link
								className={classes.link}
								to={{
									pathname: `/country/${rowElements[1].name}`
								}}
							>
								{r.name}
							</Link>
						</TableCell>
					)}
				</React.Fragment>
			))}
		</TableRow>
	);
}

export default CountryTableRow;
