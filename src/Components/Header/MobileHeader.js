import React from "react";
import useStyles from "./Header.styles";
import MobileMenu from "./MobileComps/MobileMenu";
const MobileHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.root_mobile}>
      <img
        style={{ width: 200, height: 200 }}
        src="https://i.ibb.co/vv8DVfg/Edited-Logo.png"
      ></img>
      <MobileMenu />
    </header>
  );
};

export default MobileHeader;
