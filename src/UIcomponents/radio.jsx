import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  Button,
  Stack,
  FormControlLabel,
} from "@mui/material";
const RadioGrp = ({ data }) => {
  const { validate } = data;
  console.log(data);
  const [selectedRadio, setselectedRadio] = useState("");
  return (
    <Stack direction="row" justifyContent="space-between">
      {validate.options.map((option) => (
        <Button
          sx={{ maxWidth: "49%" }}
          variant="outlined"
          key={option.value}
          value={option.value}
          onClick={() => setselectedRadio(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </Stack>
  );
};

export default RadioGrp;
