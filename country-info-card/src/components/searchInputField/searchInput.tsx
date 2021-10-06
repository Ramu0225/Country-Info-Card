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
	
	const classes = useStyles();
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const useDebounce = (values:string, delay:number) => {
		React.useEffect(() => {
			const handler = setTimeout(() => {
				setValue(values);
			}, delay);
			return () => {
				clearTimeout(handler);
			};
		});
		return value;
	};
		const lastValue = useDebounce(value, 500);
	
	const SearchCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(lastValue);
		setValue(e.target.value);
		dispatch(searchCountry(lastValue));
	};
	const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter") {
			e.preventDefault();
		}
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				onChange={SearchCountries}
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
