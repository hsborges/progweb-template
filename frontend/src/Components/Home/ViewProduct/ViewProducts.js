import Typography from "@material-ui/core/Typography";
import { ProductCard } from "../ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import APIService from "../../../utils/APIService";

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
  const [allProducts, setAllProducts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    APIService.fetchAllProducts().then((products) => {
      setAllProducts(products.docs);
    });
  }, []);

  return (
    <div className={classes.rootDiv}>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Grid container className={classes.displayFlex}>
        {allProducts.map((item) => (
          <Grid
            item
            xs={6}
            sm={3}
            className={classes.displayFlex}
            key={item._id}
          >
            <ProductCard data={item} key={item.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
