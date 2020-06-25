import React, { useEffect, useState } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { ProductCard } from "../ProductCard/ProductCard";
import APIService from "../../../utils/APIService";
import { useStyles } from "./styles";
import { CATEGORIES } from "../../../utils/enums";
import Pagination from "@material-ui/lab/Pagination";

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
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const classes = useStyles();

  const query = new URLSearchParams(window.location.search).get("termo");

  useEffect(() => {
    setLoading(true);
    const categoryParam =
      category === CATEGORIES.RECENTES ? `` : `category=${category}`;
    const param = isBusca ? `search=${query}` : categoryParam;

    APIService.fetchAllProducts(`${param}&page=${page}`).then((products) => {
      setPages(products.pages);
      setAllProducts(products.docs);
      setLoading(false);
    });
  }, [category, isBusca, query, page]);

  return (
    <div className={classes.rootDiv}>
      <Typography className={classes.title} variant="h5">
        {!isBusca ? title[category] : `Resultados para "${query}"`}
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
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
        {!loading && allProducts.length < 1 && (
          <Typography variant="h5" className={classes.marginTop}>
            Parece que não tem nada aqui ainda :(
          </Typography>
        )}
      </Grid>
      {pages > 1 && (
        <div className={classes.pagination}>
          <Pagination
            count={pages}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </div>
      )}
    </div>
  );
};
