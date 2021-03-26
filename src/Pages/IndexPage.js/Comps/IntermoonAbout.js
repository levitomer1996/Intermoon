import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../Indexpage.styles";
const IntermoonAbout = () => {
  const classes = useStyles();
  return (
    <div className={classes.about_root}>
      <div className={classes.title_container}>
        <Typography className={classes.intermoon_about_title}>
          INTERMOON
        </Typography>
        <Typography className={classes.intermoon_about_second_title}>
          Made for strong holders
        </Typography>
      </div>
      <div className={classes.intermoon_about_container}>
        <Typography className={classes.intermoon_about_text}>
          Recently we have seen how many tokens have gone to the moon in a
          matter of a few days or weeks and without much development behind. We
          have come to change this and to put all our desire and our effort to
          go even further.
        </Typography>
        <Typography className={classes.intermoon_about_text}>
          That is why we have created $ IMOON, with tokenomics designed to
          compensate holders and also to constantly add liquid to the exchange
          pair. 6% of each transaction will be distributed among all holders. 7%
          of each transaction will be added to the liquidity pool automatically.
        </Typography>
        <Typography className={classes.intermoon_about_text}>
          Every day I will be burning the LP that the contract will generate and
          the transactions will be shared in the telegram group so that everyone
          can see them.
        </Typography>
      </div>
    </div>
  );
};

export default IntermoonAbout;
