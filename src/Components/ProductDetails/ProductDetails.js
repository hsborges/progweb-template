import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ButtonBase, Container, Divider, Button } from '@material-ui/core';
import ProductSpec from './ProductSpec';
import { green } from '@material-ui/core/colors';
import SellerInfo from './SellerInfo';
import Icon from "@mdi/react";
import {
  mdiCart
} from "@mdi/js";


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '12px'
  },
  image: {
    width: 512,
    height: 512,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    color: 'white',
    backgroundColor: green[500],
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: green[700]
    },
  }
}));

export const ProductDetails = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        <Container>
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              LG Smart TV LG 49" 4K
            </Typography>
          </Grid>
        </Container>
        <Divider style={{ marginTop: "12px" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="" src="https://www.lg.com/br/images/tv/md06134556/gallery/N01_d01.jpg" />
                </ButtonBase>
              </Grid>
            </Grid>
            <Grid item xs style={{ marginTop: "24px" }}>
              <Grid container direction="column" justify="center" alignItems="flex">
                <Grid item>
                  <Typography gutterBottom variant="h6">
                    Vendedor
                    </Typography>
                  <SellerInfo />
                </Grid>
                <Typography gutterBottom variant="h6" style={{ marginTop: "24px" }}>
                  Especificações
                </Typography>
                <Grid item>
                  <ProductSpec />
                </Grid>
                <Grid item style={{ marginTop: "12px" }}>
                  <Typography variant="h6">
                    R$ 1.500,00
                </Typography>
                </Grid>
                <Grid item style={{ marginTop: "12px" }}>
                  <Button variant="contained" color="white" className={classes.button} startIcon={<Icon path={mdiCart} size={1.5} />}>Comprar</Button>
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
            HDR Ativo, NanoCell para cores mais precisas, inteligência artificial ThinQ AI, imersão de som com DTS Virtual.
            </Typography>
        </Grid>
      </div>
    </Container>
  );
}
