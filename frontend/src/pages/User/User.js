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
import Pagination from "@material-ui/lab/Pagination";

export const User = ({ match }) => {
  const history = useHistory();
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);

  const logado = !!localStorage.getItem("token");
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  const nick = match.params.nick || profile?.nickname;

  const userPanel = window.location.pathname === "/conta";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await APIService.fetchUser(nick);
        setUser(userData);
        setLoading(false);
      } catch (e) {
        console.log(e);
        history.push("/erro");
      }
    };

    fetchData();
  }, [nick]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setProductsLoading(true);
    const fetchData = async () => {
      try {
        const productsData = await APIService.fetchProductsFromUser(nick, page);
        setPages(productsData.pages);
        setProducts(productsData.docs);
        setProductsLoading(false);
      } catch (e) {
        console.log(e);
        history.push("/erro");
      }
    };

    fetchData();
  }, [page, nick, refresh]); // eslint-disable-line react-hooks/exhaustive-deps

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
                  {!productsLoading ? (
                    products?.map((item, idx) => (
                      <Grid item xs={12} sm={3} key={`${item.title}-${idx}`}>
                        <ProductCard
                          data={item}
                          editable={userPanel}
                          refresh={refresh}
                          setRefresh={setRefresh}
                        />
                      </Grid>
                    ))
                  ) : (
                    <div className={classes.flexCenter}>
                      <CircularProgress />
                    </div>
                  )}
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
      {pages > 1 && (
        <div className={classes.pagination}>
          <Pagination
            count={pages}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </div>
      )}
    </>
  );
};
