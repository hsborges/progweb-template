import React, { useEffect, useState } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { ProductCard } from "../ProductCard/ProductCard";
import APIService from "../../../utils/APIService";
import { useStyles } from "./styles";
import { CATEGORIES } from "../../../utils/enums";

const title = {
  [CATEGORIES.RECENTES]: "Anúncios recentes",
  [CATEGORIES.CELULARES]: "Celulares",
  [CATEGORIES.INFORMATICA]: "Informática",
  [CATEGORIES.AUDIO_VIDEO]: "Audio e Vídeo",
  [CATEGORIES.VESTUARIO]: "Vestuário",
  [CATEGORIES.ELETRODOMESTICOS]: "Eletrodomésticos",
  [CATEGORIES.FERRAMENTAS]: "Ferramentas",
  [CATEGORIES.LIVROS]: "Livros",
};

export const ViewProducts = ({ category, isBusca = false }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    const categoryParam =
      category === CATEGORIES.RECENTES ? `` : `category=${category}`;
    const param = isBusca ? `search=${category}` : categoryParam;
    console.log(isBusca);
    APIService.fetchAllProducts(param).then((products) => {
      setAllProducts(products.docs);
      setLoading(false);
    });
  }, [category, isBusca]);

  return (
    <div className={classes.rootDiv}>
      <Typography className={classes.title} variant="h5">
        {!isBusca ? title[category] : `Resultados para "${category}"`}
      </Typography>
      <Grid container className={classes.displayFlex}>
        {!loading ? (
          allProducts.map((item) => (
            <Grid
              item
              xs={6}
              sm={3}
              className={classes.displayFlex}
              key={item._id}
            >
              <ProductCard data={item} key={item.title} />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
        {!loading && allProducts.length < 1 && (
          <Typography variant="h5" style={{ marginTop: "60px" }}>
            Parece que não tem nada aqui ainda :(
          </Typography>
        )}
      </Grid>
    </div>
  );
};
