import React from "react";
import { IconButton, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { FaDiscord } from "react-icons/fa";
import useStyles from "../Header.styles";

function NavItems() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.social_media_container}
      >
        <Grid item>
          <IconButton
            onClick={() => window.open("https://twitter.com/intermoontoken")}
          >
            <TwitterIcon className={classes.social_media_icon}></TwitterIcon>
          </IconButton>
          <Grid item>
            <Typography className={classes.socialmedia_text}>
              Twitter
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.social_media_container}
      >
        <Grid item>
          <IconButton
            onClick={() => window.open("https://www.reddit.com/r/INTERMOON/")}
          >
            <RedditIcon className={classes.social_media_icon}></RedditIcon>
          </IconButton>
        </Grid>
        <Grid item>
          <Typography className={classes.socialmedia_text}>Reddit</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.social_media_container}
      >
        <Grid item>
          <IconButton
            onClick={() => window.open("https://t.me/intermoontoken")}
          >
            <TelegramIcon className={classes.social_media_icon} />
          </IconButton>
        </Grid>
        <Grid item>
          {" "}
          <Typography className={classes.socialmedia_text}>Telegram</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.social_media_container}
      >
        <Grid item>
          <IconButton
            onClick={() => window.open("https://discord.com/invite/bskmPkYzyn")}
          >
            <FaDiscord className={classes.social_media_icon} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography className={classes.socialmedia_text}>Discord</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.social_media_container}
      >
        <Grid item>
          <IconButton
            onClick={() =>
              window.open(
                "https://goswapp-bsc.web.app/0x7DA85C84b8191A977750382f1B8f4de13dD79E3f"
              )
            }
          >
            <ShowChartIcon className={classes.social_media_icon} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography className={classes.socialmedia_text}>Charts</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default NavItems;
