import React, { useState } from "react";
import {
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { AppMenu } from "./AppMenu";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#000",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
}));

export const Appbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          margin: "0px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e8e8e8",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            minha lojinha
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div style={{ padding: "15px" }}>
              <Button
                style={{
                  width: "115px",
                  borderRadius: "50px",
                  backgroundColor: "#234099",
                }}
                variant="contained"
                disableElevation
              >
                <Typography
                  variant="body2"
                  style={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  Anunciar
                </Typography>
              </Button>
            </div>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              style={{ color: "#000" }}
            >
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              style={{ color: "#000" }}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AppMenu anchorEl={anchorEl} handleMenuClose={handleMenuClose} />
    </>
  );
};
