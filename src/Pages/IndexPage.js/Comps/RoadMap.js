import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../Indexpage.styles";
import RoadMapWeek from "./RoadMapWeek";
import week_list from "./week_list";
function RoadMap() {
  const classes = useStyles();

  return (
    <div className={classes.roadmap_container}>
      <Typography className={classes.roadmap_title}>ROADMAP</Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={5}
      >
        {week_list.map(({ title, date, list }) => {
          return <RoadMapWeek title={title} date={date} list={list} />;
        })}
      </Grid>
    </div>
  );
}

export default RoadMap;
