import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Appbar} from "../Appbar/Appbar";
import {ProductDetails} from "./ProductDetails/ProductDetails";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  home: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
}));

function Product() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Appbar />
      <div className={classes.product}>
        <ProductDetails />
      </div>
    </div>
  );
}

export default Product;
