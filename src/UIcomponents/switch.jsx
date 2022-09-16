import React, { useState } from "react";
import { Stack, Typography, Switch } from "@mui/material";
const Switcher = ({ data }) => {
  const [switchCheak, setSwitchCheak] = useState(false);
  return (
    <Stack direction="row" alignItems="center">
      <Typography>{data.label}</Typography>
      <Switch
        checked={switchCheak}
        onClick={() => {
          setSwitchCheak(!switchCheak);
        }}
        color="primary"
        size="md"
      />
    </Stack>
  );
};

export default Switcher;
