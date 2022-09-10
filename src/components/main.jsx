import React from "react";
import TextArea from "./textArea"
import Form from "./form";
import { Box } from "@mui/material";
const Main = () => {
  return <Box display="flex" sx={{ backgroundColor: "#DDF7FD" }}>\
  <TextArea/>
  <Form/>
  </Box>;
};

export default Main;
