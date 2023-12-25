import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const AddZone = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ width: "50%" }}>
      <FormControl fullWidth>
        <InputLabel id="zone-label">Select Room</InputLabel>
        <Select
          labelId="zone-label"
          id="zone-select"
          value={selectedValue}
          label="Select Zone"
          onChange={handleChange}
        >
          <MenuItem value="zone1">Room 1</MenuItem>
          <MenuItem value="zone2">Room 2</MenuItem>
          <MenuItem value="zone3">Room 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AddZone;
