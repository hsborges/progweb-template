import React from "react";
import {TextField} from "@material-ui/core";
import {mdiMagnify} from "@mdi/js";
import Icon from "@mdi/react";
import {Categories} from "./Categories";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {ProductCard} from "./ProductCard";
import {items} from "./mock";

export const Home = () => {
  return (
    <div style={{ marginTop: "24px" }}>
      <TextField
        variant="outlined"
        placeholder="Buscar produto"
        fullWidth
        InputProps={{
          endAdornment: <Icon path={mdiMagnify} size={1} />,
        }}
      />
      <Categories />
      <Divider style={{ marginTop: "12px" }} />
      <Typography
        style={{ marginTop: "12px", marginBottom: "12px" }}
        variant="h5"
      >
        Anúncios recentes
      </Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {items.map((item) => (
          <ProductCard data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};
