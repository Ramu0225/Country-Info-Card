import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
export interface CountryElement {
	name: string;
	property: string;
}
function NestedList({
	countryElements,
}: {
	countryElements: Array<CountryElement>;
}) {
	const isOpenObject: { [key: number]: boolean } = {};
	const [open, setOpen] = React.useState(isOpenObject);

	const handleClick = (i: number) => {
		open[i] = !open[i];
		setOpen({ ...open });
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 350, bgcolor: "background.sand" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			{countryElements.map((e, i) => (
				<div key={i}>
					<ListItemButton
						onClick={() => {
							handleClick(i);
						}}
					>
						<ListItemText primary={e.property} />
						{open[i] ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open[i]} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton
								sx={{ pl: 4, backgroundColor: "black", color: "snow" }}
							>
								<ListItemText primary={e.name} />
							</ListItemButton>
						</List>
					</Collapse>
				</div>
			))}
		</List>
	);
}
export default NestedList;
