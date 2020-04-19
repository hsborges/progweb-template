import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "./Components/AppBar/AppBar";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar />
    </div>
  );
}

export default App;
