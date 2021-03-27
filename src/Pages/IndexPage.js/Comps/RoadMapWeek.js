import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../Indexpage.styles";

function RoadMapWeek({ title, date, list }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.week_plan_container}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography className={classes.week_title}>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.week_date}>{date}</Typography>
        </Grid>
        <Grid item>
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
      </Grid>
    </Grid>
  );
}

export default RoadMapWeek;
