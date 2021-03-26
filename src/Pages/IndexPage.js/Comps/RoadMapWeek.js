import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../Indexpage.styles";

function RoadMapWeek({ title, date, list }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.week_plan_container}>
      <Typography className={classes.week_title}>{title}</Typography>
      <Typography className={classes.week_date}>{date}</Typography>
      <ul>
        {list.map((item) => {
          return (
            <li style={{ color: "#ffeb3b" }}>
              <Typography style={{ color: "white", fontSize: "20px" }}>
                {item.content}
              </Typography>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
}

export default RoadMapWeek;
