import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "../../components/Appbar/Appbar";
import { Home } from "../../components/Home/Home";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

const AppHome = ({ match }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <Appbar />
      <div>
        <Home category={match?.params?.category} />
      </div>
    </div>
  );
};

export default AppHome;
