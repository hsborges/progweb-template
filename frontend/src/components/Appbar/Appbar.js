import React, { useState } from "react";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { AppMenu } from "./AppMenu/AppMenu";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useStyles } from "./styles";

export const Appbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const logado = !!localStorage.getItem("token");

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const registerProduct = () => {
    if (logado) {
      history.push("/produto/novo");
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <img
              alt="minha lojinha"
              src="/logo-only.png"
              style={{ maxWidth: "45px" }}
            />
            <Typography className={classes.title} variant="h6" noWrap>
              minha lojinha
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div style={{ padding: "15px" }}>
              <Button
                className={classes.registerButton}
                variant="contained"
                disableElevation
                onClick={registerProduct}
              >
                <Typography variant="body2" className={classes.productButton}>
                  Anunciar
                </Typography>
              </Button>
            </div>
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
