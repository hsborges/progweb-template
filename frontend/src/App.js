import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "./Components/Appbar/Appbar";
import { Home } from "./Components/Home/Home";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <Appbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
