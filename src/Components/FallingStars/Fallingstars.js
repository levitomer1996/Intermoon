import { Typography } from "@material-ui/core";
import React from "react";
import "./styles.scss";
const Fallingstars = ({ children }) => {
  return (
    <div className={"root"}>
      <div className={"night"}>
        <div className="shooting_star"></div>;{" "}
        <div className="shooting_star"></div>;{" "}
        <div className="shooting_star"></div>;{" "}
        <div className="shooting_star"></div>;
      </div>
      <div className={"night2"}>
        <div className="shooting_star2"></div>;{" "}
        <div className="shooting_star2"></div>;
      </div>{" "}
      <div className={"night3"}>
        <div className="shooting_star3"></div>;
        <div className="shooting_star3"></div>;
        <div className="shooting_star3"></div>;
        <div className="shooting_star3"></div>;
      </div>
      <div className={"night4"}>
        <div className="shooting_star4"></div>;
        <div className="shooting_star4"></div>;
        <div className="shooting_star4"></div>;
      </div>
      <div className={"child"}>{children}</div>
    </div>
  );
};

export default Fallingstars;
