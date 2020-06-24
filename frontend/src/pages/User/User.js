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

export const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const logado = !!localStorage.getItem("token");
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  const nick = match.params.nick || profile.nickname;

  const userPanel = window.location.pathname === "/conta";

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const userData = await APIService.fetchUser(nick);
        const productsData = await APIService.fetchProductsFromUser(nick);

        if (mounted) {
          setUser(userData);
          setProducts(productsData.docs);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => (mounted = false);
  }, [nick]);

  if (!logado) {
    window.location.href = "/erro";
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
              <Grid
                item
                xs={12}
                style={{
                  marginTop: "12px",
                }}
              >
                <UserInfo user={user} editable={userPanel} />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ margin: "24px 0 24px 0", justifyContent: "center" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h6">Produtos recentes</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {products &&
                    products.map((item, idx) => {
                      if (idx === 3) return null;
                      return (
                        <Grid item xs={12} sm={3} key={item.title}>
                          <ProductCard data={item} />
                        </Grid>
                      );
                    })}
                </div>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};
