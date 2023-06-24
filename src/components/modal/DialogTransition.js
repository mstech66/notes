import React from "react";
import { Zoom } from "@mui/material";

const DialogTransition = React.forwardRef(function Transition(props, ref) {
  return <Zoom in timeout={500} ref={ref} {...props} />;
});

export default DialogTransition;
