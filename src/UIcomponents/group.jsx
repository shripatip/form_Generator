import React from "react";
import Input from "./input";
import Selector from "./select";
import Radio from "./radio";
import Switch from "./switch";
import { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
const Group = ({ data }) => {
  const [radioVal, setRadioVal] = useState("newyork");

  const rendergroupitems = (subElements) => {
    return (
      <Stack direction="column">
        {subElements &&
          subElements.map((Element) => {
            
            switch (Element.uiType) {
              case "Select":
                return <Selector data={Element} />;
              case "Radio":
                return <Radio />;
              case "Ignore": {
                if(Element.conditions[0].value==radioVal)
                {
                   rendergroupitems(Element.subParameters)
                }
                else 
                return ""
              }
              case "Input":
                return <Input data={Element} />;
              case "Switch":
                return <Switch />;
            }
          })}
      </Stack>
    );
  };
  return (
    <Card sx={{ direction: "column" }}>
      <Typography>{data.label}</Typography>
      {rendergroupitems(data.subParameters)}
    </Card>
  );
};

export default Group;
