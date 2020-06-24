import React from "react";
import {
  Button,
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";
import { FILES_ROOT } from "../../utils/apiPath";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

export const ProductDetails = ({ data }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        <Container>
          <Typography gutterBottom variant="h5">
            {data?.title}
          </Typography>
        </Container>
        <Divider style={{ marginTop: "12px" }} />
        <Grid container direction="row">
          <Grid item xs={12} sm={6}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={data?.title}
                src={data?.image && `${FILES_ROOT}/${data.image.fileName}`}
              />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item style={{ marginBottom: "24px" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                R$ {data?.price}
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "24px" }}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                target="_blank"
                href={
                  data?.sellerPhone &&
                  `https://api.whatsapp.com/send?phone=55${data.sellerPhone}&text=Olá, tenho interesse no produto ${data.title}`
                }
                style={{ backgroundColor: "#e33b5d" }}
                disableElevation
                startIcon={<Icon path={mdiWhatsapp} size={1.5} />}
              >
                Tenho Interesse
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Vendedor:{" "}
                <Link to={`/usuario/${data?.seller}`}>{data?.seller}</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Container>
          <Grid item xs={12} style={{ marginTop: "12px" }}>
            <Typography gutterBottom variant="h5">
              Descrição
            </Typography>
          </Grid>
        </Container>
        <Divider />
        <Grid item xs={12} style={{ margin: "12px 24px 12px 24px" }}>
          <Typography variant="body1">{data?.description}</Typography>
        </Grid>
      </div>
    </Container>
  );
};
