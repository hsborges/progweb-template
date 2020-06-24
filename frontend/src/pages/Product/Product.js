import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "../../components/Appbar/Appbar";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import APIService from "../../utils/APIService";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function Product({ match }) {
  const [productInfo, setProductInfo] = useState({});
  const history = useHistory();
  const classes = useStyles();
  const productId = match.params.id;

  useEffect(() => {
    APIService.fetchProduct(productId)
      .then((product) => {
        setProductInfo(product);
      })
      .catch((e) => {
        console.log(e);
        history.push("/erro");
      });
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.grow}>
      <Appbar />
      <ProductDetails data={productInfo} />
    </div>
  );
}

export default Product;
