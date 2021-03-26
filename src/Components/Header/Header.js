import React from "react";
import NavItems from "./Comps/NavItems";

import useStyles from "./Header.styles";
import MobileHeader from "./MobileHeader";

function Header() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.root}>
        <img
          style={{ width: 150, height: 150 }}
          src="https://i.ibb.co/vv8DVfg/Edited-Logo.png"
        ></img>
        <nav className={classes.nav}>
          <NavItems />
        </nav>
      </header>
      <MobileHeader />
    </>
  );
}

export default Header;
