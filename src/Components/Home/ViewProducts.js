import Typography from "@material-ui/core/Typography";
import { ProductCard } from "./ProductCard";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  rootDiv: {
    margin: "24px",
  },
  title: {
    marginBottom: "12px",
  },
  displayFlex: {
    display: "flex",
  },
}));

export const ViewProducts = ({ title, products }) => {
  const classes = useStyles();

  return (
    <div className={classes.rootDiv}>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Grid container className={classes.displayFlex}>
        {products.map((item) => (
          <Grid item xs={6} sm={3} className={classes.displayFlex}>
            <ProductCard data={item} key={item.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
