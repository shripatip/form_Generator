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
import Selector from "../UIcomponents/select";
import Group from "../UIcomponents/group";
import Input from "../UIcomponents/input";
import fields from "../data/data.json";
const Form = () => {
  const renderFields = (fields) => {
    console.log(fields);
    return (
      <Stack direction="column">
        {fields && fields.map((field) => {
          switch (field.uiType) {
            case "Input":
              return <Input data={field} />;
            case "Group":
              return <Group data={field} />;
            case "Select":
              return <Selector data={field}/>;
          }
        })}
      </Stack>
    );
  };
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "red",
        width: "50%",
        height: "100vh",
        borderLeft: "4px solid black",
      }}
    >
      <Card sx={{ width: "80%", m: " 5% auto", p:"16px"}}>
        <from>
          <Typography ml={1} variant="body1">
            New Pizza
          </Typography>
          {renderFields(fields)}
        </from>
      </Card>
    </Box>
  );
};

export default Form;
