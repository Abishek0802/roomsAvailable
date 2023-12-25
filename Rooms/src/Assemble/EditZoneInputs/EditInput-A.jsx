import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const EditZone = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ width: "50%" }}>
      <FormControl fullWidth>
        <InputLabel id="zone-label">Select Zone</InputLabel>
        <Select
          labelId="zone-label"
          id="zone-select"
          value={selectedValue}
          label="Select Zone"
          onChange={handleChange}
        >
          <MenuItem value="zone1">Zone 1</MenuItem>
          <MenuItem value="zone2">Zone 2</MenuItem>
          <MenuItem value="zone3">Zone 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default EditZone;
