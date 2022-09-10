import React from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  TextField,
  Tooltip,
  Select,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Input = ({ data }) => {
    console.log(data);
  return (
    <Card
      key={data.jsonKey}
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography>{data.label}</Typography>
      {data.description && (
        <Tooltip title={data.description}>
          <InfoOutlinedIcon />
        </Tooltip>
      )}
      <TextField variant="outlined" required placeholder={data.placeholder} />
    </Card>
  );
};

export default Input;
