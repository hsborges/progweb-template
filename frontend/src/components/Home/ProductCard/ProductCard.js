import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { FILES_ROOT } from "../../../utils/apiPath";
import { useStyles } from "./styles";
import APIService from "../../../utils/APIService";
import { SnackAlert } from "../../SnackAlert/SnackAlert";
import { DialogAlert } from "../../DialogAlert/DialogAlert";

export const ProductCard = ({
  data: {
    _id,
    title,
    description,
    price,
    category,
    image: { fileName = "1592335000782-write.png" } = {},
  },
  editable = false,
  setRefresh,
  refresh,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);
  const [edicao, setEdicao] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    APIService.deleteProduct(id)
      .then(() => {
        setOpenDialog(false);
        setAlert({ type: "success", message: "Produto removido com sucesso!" });
        setOpen(true);
        setRefresh(!refresh);
      })
      .catch((e) => {
        console.log(e);
        setOpenDialog(false);
        setAlert({ type: "error", message: `${e.message}.` });
        setOpen(true);
      });
  };

  const handleDialog = (e) => {
    const acao = e.currentTarget.id;
    if (acao === "editar") {
      setEdicao(true);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setEdicao(false);
    setOpenDialog(false);
  };

  return (
    <Card className={classes.root} style={{ margin: "8px" }}>
      <CardActionArea style={{ height: "100%", flexDirection: "column" }}>
        <CardMedia
          className={classes.media}
          image={`${FILES_ROOT}/${fileName}`}
          title={title}
          onClick={() => history.push("/produto/" + _id)}
        />
        <CardContent
          onClick={() => history.push("/produto/" + _id)}
          style={{ paddingBottom: "0px" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              overflow: "hidden",
              maxHeight: 65,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ overflow: "hidden", maxHeight: 60 }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          {editable ? (
            <>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                id="editar"
                onClick={handleDialog}
              >
                Editar
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                id="apagar"
                onClick={handleDialog}
              >
                Apagar
              </Button>
            </>
          ) : (
            <Button
              color="secondary"
              size="large"
              style={{ padding: "0px 6px" }}
              onClick={() => history.push("/produto/" + _id)}
            >
              R$ {price}
            </Button>
          )}
        </CardActions>
      </CardActionArea>
      {editable && (
        <>
          <DialogAlert
            id={_id}
            productTitle={title}
            productDescription={description}
            productCategory={category}
            productPrice={price}
            handleDelete={() => handleDelete(_id)}
            openDialog={openDialog}
            setOpenDialog={handleCloseDialog}
            edicao={edicao}
            refresh={refresh}
            setRefresh={setRefresh}
          />
          <SnackAlert open={open} alert={alert} setOpen={setOpen} />
        </>
      )}
    </Card>
  );
};
