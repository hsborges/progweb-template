import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "./Components/AppBar/Appbar";
import { Home } from "./Components/Home/Home";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Appbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
