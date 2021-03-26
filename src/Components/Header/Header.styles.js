import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "radial-gradient(ellipse at bottom, #0D1E31, #111)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  social_media_icon: {
    width: 60,
    height: 60,
    color: "#ffeb3b",
    "&:hover": { color: "#9c27b0" },
  },
  socialmedia_text: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
    fontSize: "25px",
  },
  social_media_container: {
    paddingRight: 20,
  },
  root_mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    background: "radial-gradient(ellipse at bottom, #0D1E31, #111)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mobile_menu_icon: {
    color: "#ffeb3b",
    width: 50,
    height: 50,
  },
  menu_mobile: {
    background: "radial-gradient(ellipse at bottom, #0D1E31, #111)",
  },
  mobile_menu_social_icons: {
    color: "purple",
  },
  menu_item_text: {
    color: "white",
    fontFamily: "Raleway, sans-serif",
  },
}));

export default useStyles;
