import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function NumberPeoplePicker() {
  const [age, setAge] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const renderItems = () => {
    const items = [];
    for (let i = 1; i < 10; i++) {
      items.push(
        <MenuItem value={i}>
          {" "}
          <em>{i}</em>{" "}
        </MenuItem>
      );
    }
    return items;
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 80 }}
        style={{ padding: 0, margin: 0 }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          {renderItems()}
        </Select>
      </FormControl>
    </div>
  );
}
