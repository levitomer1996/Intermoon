import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 200,
  },
  about_root: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buy_intermoon_button_container: {
    paddingTop: 100,
  },
  title_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  go_to_moon_text: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "40px",
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      width: "65%",
    },
  },
  intermoon_about_title: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "40px",
  },
  intermoon_about_second_title: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "30px",
  },
  roadmap_title: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "40px",
    marginTop: 40,
  },
  intermoon_about_container: {
    width: "70%",
  },
  intermoon_about_text: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "20px",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#6d2c92",
    fontFamily: "Raleway, sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "#ffeb3b", color: "black" },
  },

  //RoadMap
  roadmap_container: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  weeks_container: {},
  week_plan_container: { padding: 20 },
  week_title: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "25px",
  },
  week_date: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "15px",
  },
  week_plane_list: {},
  week_plane_list_item: {},
}));

export default useStyles;
