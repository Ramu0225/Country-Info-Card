import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { sortByCountryName, sortByPopulation, sortByRegion } from "../../redux/action";

function SortCountryBy() {
	const [sort, setSort] = React.useState("");
  const dispatch = useDispatch();
	const handleChange = (event) => {
    setSort(event.target.value);
    if (event.target.value === 'Population') {
      dispatch(sortByPopulation())
    }
    if (event.target.value === 'CountryName') {
      dispatch(sortByCountryName())
    }
    if (event.target.value === 'Region') {
      dispatch(sortByRegion());
    }
	};

	return (
		<Box
			sx={{
				maxWidth: 290,
				minWidth: 100,
				backgroundColor: "#DEDADA",
				borderRadius: 2,
			}}
		>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort by</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={sort}
					label="sort-by"
					onChange={handleChange}
				>
					<MenuItem value={"CountryName"}>Country-Name(A-Z)</MenuItem>
					<MenuItem value={"Population"}>Population(descending)</MenuItem>
					<MenuItem value={"Region"}>Region(Area)</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
export default SortCountryBy;