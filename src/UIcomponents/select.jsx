import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Stack, Typography, Select, MenuItem, Tooltip } from "@mui/material";
const Selector = ({ data }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography>{data.label}</Typography>
      {data.description && (
        <Tooltip title={data.description}>
          <InfoOutlinedIcon />
        </Tooltip>
      )}
      <Select
        sx={{ minWidth: "60%" }}
        flexGrow={1}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={data.validate.options[0].value}
      >
        {data &&
          data.validate.options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
      </Select>
    </Stack>
  );
};

export default Selector;
