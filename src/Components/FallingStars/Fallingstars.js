import { Typography } from "@material-ui/core";
import React from "react";
import "./styles.css";
const Fallingstars = ({ children }) => {
  return (
    <div className={"root"}>
      <div className={"night"}>
        <div className={"star"}></div>
        <div className={"star"}></div>
        <div className={"star"}></div>
      </div>
      <div className={"child"}>{children}</div>
    </div>
  );
};

export default Fallingstars;
