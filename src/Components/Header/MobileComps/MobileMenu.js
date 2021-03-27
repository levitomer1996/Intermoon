import React, { useState } from "react";
import {
  IconButton,
  Paper,
  Fade,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { FaDiscord } from "react-icons/fa";
import useStyles from "../Header.styles";
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const handleClick = (link) => {
    window.open(link);
    handleOpen();
  };
  return (
    <div style={{ float: "right" }}>
      <IconButton
        onClick={() => {
          handleOpen();
        }}
      >
        <MenuIcon className={classes.mobile_menu_icon} />
      </IconButton>
      <Fade in={open} style={{ position: "absolute", right: 20, zIndex: 200 }}>
        <Paper>
          <List className={classes.menu_mobile}>
            <ListItem
              button
              onClick={() => handleClick("https://twitter.com/intermoontoken")}
            >
              <ListItemIcon>
                <TwitterIcon className={classes.mobile_menu_social_icons} />
              </ListItemIcon>
              <ListItemText
                primary="Twitter"
                className={classes.menu_item_text}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => handleClick("https://www.reddit.com/r/INTERMOON/")}
            >
              <ListItemIcon>
                <RedditIcon className={classes.mobile_menu_social_icons} />
              </ListItemIcon>
              <ListItemText
                primary="Reddit"
                className={classes.menu_item_text}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => handleClick("https://t.me/intermoontoken")}
            >
              <ListItemIcon>
                <TelegramIcon className={classes.mobile_menu_social_icons} />
              </ListItemIcon>
              <ListItemText
                primary="Telegram"
                className={classes.menu_item_text}
              />
            </ListItem>
            <ListItem
              button
              onClick={() =>
                handleClick("https://discord.com/invite/bskmPkYzyn")
              }
            >
              <ListItemIcon>
                <FaDiscord className={classes.mobile_menu_social_icons} />
              </ListItemIcon>
              <ListItemText
                primary="Discord"
                className={classes.menu_item_text}
              />
            </ListItem>{" "}
            <ListItem
              button
              onClick={() =>
                window.open(
                  "https://goswapp-bsc.web.app/0x7DA85C84b8191A977750382f1B8f4de13dD79E3f"
                )
              }
            >
              <ListItemIcon>
                <ShowChartIcon className={classes.mobile_menu_social_icons} />
              </ListItemIcon>
              <ListItemText
                primary="Charts"
                className={classes.menu_item_text}
              />
            </ListItem>
          </List>
        </Paper>
      </Fade>
    </div>
  );
}

export default MobileMenu;
