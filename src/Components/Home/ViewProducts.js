import Typography from "@material-ui/core/Typography";
import { ProductCard } from "./ProductCard";
import React from "react";
import Grid from "@material-ui/core/Grid";

export const ViewProducts = ({ title, products }) => {
  return (
    <div style={{ margin: "24px" }}>
      <Typography style={{ marginBottom: "12px" }} variant="h5">
        {title}
      </Typography>
      <Grid container style={{ display: "flex" }}>
        {products.map((item) => (
          <Grid item xs={6} sm={3} style={{ display: "flex" }}>
            <ProductCard data={item} key={item.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
