import React from "react";
import {
  Button,
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import ProductSpec from "../ProductSpec/ProductSpec";
import SellerInfo from "../SellerInfo/SellerInfo";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";
import { FILES_ROOT } from "../../../utils/apiPath";
import { useStyles } from "./styles";

export const ProductDetails = ({ data }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        <Container>
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              {data && data.title}
            </Typography>
          </Grid>
        </Container>
        <Divider style={{ marginTop: "12px" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt={data && data.title}
                    src={
                      data &&
                      data.image &&
                      `${FILES_ROOT}/${data.image.fileName}`
                    }
                  />
                </ButtonBase>
              </Grid>
            </Grid>
            <Grid item xs style={{ marginTop: "24px" }}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex"
              >
                <Grid item>
                  <Typography gutterBottom variant="h6">
                    Vendedor
                  </Typography>
                  <SellerInfo name={data && data.seller} />
                </Grid>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{ marginTop: "24px" }}
                >
                  Especificações
                </Typography>
                <Grid item>
                  <ProductSpec />
                </Grid>
                <Grid item style={{ marginTop: "12px" }}>
                  <Typography variant="h6">R$ {data && data.price}</Typography>
                </Grid>
                <Grid item style={{ marginTop: "12px" }}>
                  <Button
                    variant="contained"
                    color="white"
                    className={classes.button}
                    startIcon={<Icon path={mdiCart} size={1.5} />}
                  >
                    Comprar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="h6" style={{ marginTop: "12px" }}>
          Descrição
        </Typography>
        <Divider />
        <Grid item>
          <Typography variant="body1" style={{ marginTop: "12px" }}>
            {data && data.description}
          </Typography>
        </Grid>
      </div>
    </Container>
  );
};
