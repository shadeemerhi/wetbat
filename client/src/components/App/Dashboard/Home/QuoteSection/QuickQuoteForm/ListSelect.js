// Component libraries
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const ListSelect = ({ list, name, value, labelText, handleChange }) => {
	return (
		<FormControl required variant="filled" className="FormControl">
			<InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				name={name}
				value={value}
				onChange={handleChange}
			>
				{list.map(item => (
					<MenuItem key={item.title || item} value={item.title || item}>
						{item.title || item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default ListSelect;
