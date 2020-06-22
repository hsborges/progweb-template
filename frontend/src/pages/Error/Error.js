import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "../../components/Appbar/Appbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export const Error = () => {
  const classes = useStyles();

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <Appbar />
      <Grid container style={{ marginTop: "60px" }}>
        <Grid item xs={12} style={style}>
          <Typography variant="h3">Ah não!</Typography>
        </Grid>
        <Grid item xs={12} style={style}>
          <Typography>
            Parece que algo de errado não está certo ¯\_(ツ)_/¯
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
