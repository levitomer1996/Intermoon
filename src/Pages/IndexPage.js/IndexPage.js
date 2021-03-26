import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./Indexpage.styles";
import IntermoonAbout from "./Comps/IntermoonAbout";
import RoadMap from "./Comps/RoadMap";
function IndexPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.go_to_moon_text}>
        HAVE YOU EVER WANTED TO GO TO THE MOON?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          window.open(
            "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7DA85C84b8191A977750382f1B8f4de13dD79E3f"
          );
        }}
      >
        Buy INTERMOON
      </Button>

      <IntermoonAbout />
      <RoadMap />
    </div>
  );
}

export default IndexPage;
