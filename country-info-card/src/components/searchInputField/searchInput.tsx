import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/action";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(3),
			width: "19ch",
			backgroundColor: "snow",
			borderRadius: "5px",
		},
	},
}));
function SearchInput() {
	const [value, setValue] = useState("");
	const classes = useStyles();
	const dispatch = useDispatch();
	const searchCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setValue(e.target.value);
		dispatch(searchCountry(value));
	};
	const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter") {
			e.preventDefault();
		}
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				onChange={searchCountries}
				onKeyPress={keyPressHandler}
				id="outlined-basic"
				label="Search Country"
				variant="filled"
				color="primary"
				value={value}
			/>
		</form>
	);
}
export default SearchInput;
