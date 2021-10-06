import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { State } from "../../redux/type";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  show: {
    margin: '150px',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent:"center",
    color: 'green'
  },
  	hide: {
		display: "none",
	},
}));
function Loader() {
  const classes = useStyles();
  	const show = useSelector((state: State) => {
			return state.show.show;
    }); 
  const load = !show ? classes.hide : classes.show;
  return (
		<Box  className={load}>
			<CircularProgress color="success" />
      <p>Please Wait...</p>
		</Box>
	);
}

export default Loader;