import React from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  Button,
  TextField,
  Tooltip,
  Select,
} from "@mui/material";
//from
import RadioGrp from "../UIcomponents/radio"
import Switcher from "../UIcomponents/switch";
import Selector from "../UIcomponents/select";
import Group from "../UIcomponents/group";
import Input from "../UIcomponents/input";
import fields from "../data/data.json";
const Form = () => {
  const renderFields = (fields) => {
    console.log(fields);
    return (
      <Stack direction="column" gap={2}>
        {fields &&
          fields.map((field) => {
            switch (field.uiType) {
              case "Input":
                return <Input data={field} />;
              case "Group":
                return <Group data={field} />;
              case "Select":
                return <Selector data={field} />;
              case "Switch":
                return <Switcher data={field} />;
              case "Radio":
                return <RadioGrp data={field} />;
            }
          })}
      </Stack>
    );
  };
  return (
    <Box
      component="div"

      sx={{
        overflowY:"scroll",
        backgroundColor: "red",
        width: "50%",
        height: "100vh",
        borderLeft: "4px solid black",
      }}
    >
      <Card sx={{ width: "80%", m: " 5% auto", p: "16px" }}>
        <from>
          <Typography ml={1} variant="body1">
            New Pizza
          </Typography>
          {renderFields(fields)}
          <Stack direction="row" justifyContent="flex-end">
            <Button>cancel</Button>
            <Button>Submit</Button>
          </Stack>
        </from>
      </Card>
    </Box>
  );
};

export default Form;
