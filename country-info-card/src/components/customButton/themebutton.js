import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Brightness4,  DarkModeOutlined} from '@mui/icons-material';

function ThemeButton() {
  const [theme, setTheme] = React.useState('');

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
		<Box sx={{ minWidth: 90 }}>
			<FormControl fullWidth  size="small">
				<InputLabel id="demo-simple-select-label">Theme</InputLabel>
				<Select
					color="primary"
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={theme}
					label="Theme"
					onChange={handleChange}
				>
					<MenuItem value={"dark"}>
						Dark <DarkModeOutlined />
					</MenuItem>
					<MenuItem value={"Light"}>
						Light <Brightness4 />{" "}
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

export default ThemeButton;