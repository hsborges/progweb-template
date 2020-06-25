import React, { useEffect, useState } from "react";
import APIService from "../../utils/APIService";
import {
  Container,
  Grid,
  Typography,
  Divider,
  CssBaseline,
  CircularProgress,
} from "@material-ui/core";
import { Appbar } from "../../components/Appbar/Appbar";
import { ProductCard } from "../../components/Home/ProductCard/ProductCard";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { UserTitle } from "../../components/UserTitle/UserTitle";
import { useStyles } from "./styles";
import { useHistory } from "react-router";

export const User = ({ match }) => {
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const logado = !!localStorage.getItem("token");
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  const nick = match.params.nick || profile?.nickname;

  const userPanel = window.location.pathname === "/conta";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await APIService.fetchUser(nick);
        const productsData = await APIService.fetchProductsFromUser(nick);

        setUser(userData);
        setProducts(productsData.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
        history.push("/erro");
      }
    };

    fetchData();
  }, [nick]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!logado && userPanel) {
    window.location.href = "/login";
  }

  return (
    <>
      <CssBaseline />
      <Appbar />
      {!loading ? (
        <>
          <UserTitle name={user?.name} editable={userPanel} />
          <Container>
            <Divider />
            <Grid container>
              <Grid item xs={12} className={classes.marginTop}>
                <UserInfo user={user} editable={userPanel} />
              </Grid>
              <Grid item xs={12} className={classes.marginCenter}>
                <div className={classes.flexJustify}>
                  <Typography variant="h6">Produtos anunciados</Typography>
                </div>
                <div className={classes.flexJustify}>
                  {products?.map((item) => (
                    <Grid item xs={12} sm={3} key={item.title}>
                      <ProductCard data={item} editable={userPanel} />
                    </Grid>
                  ))}
                  {!loading && products.length < 1 && (
                    <Typography variant="h5" style={{ marginTop: "60px" }}>
                      Parece que não tem nada aqui ainda :(
                    </Typography>
                  )}
                </div>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <div className={classes.flexCenter}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};
