import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Appbar} from "./Components/AppBar/Appbar";
import {Home} from "./Components/Home/Home";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  home: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Appbar />
      <div className={classes.home}>
        <Home />
      </div>
    </div>
  );
}

export default App;
