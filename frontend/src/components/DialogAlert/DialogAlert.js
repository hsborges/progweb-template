import React, { useRef, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
import { CATEGORIES_LIST } from "../../utils/enums";
import { SnackAlert } from "../SnackAlert/SnackAlert";
import APIService from "../../utils/APIService";

export const DialogAlert = ({
  id,
  openDialog,
  setOpenDialog,
  handleDelete,
  edicao,
  productCategory,
  productTitle,
  productPrice,
  productDescription,
  setRefresh,
  refresh,
}) => {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const [category, setCategory] = useState(productCategory);

  const handleClick = async () => {
    if (!edicao) {
      handleDelete();
      return;
    }

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;

    if (title === "" || description === "" || price === "") {
      setAlert({ type: "error", message: "Há um ou mais campos vazios!" });
      setOpen(true);
      return;
    }

    try {
      const data = { title, description, price, category };
      await APIService.updateProduct(id, data);

      setAlert({
        type: "success",
        message: "Editado com sucesso!",
      });
      setOpen(true);
      setTimeout(() => {
        setOpenDialog();
        setRefresh(!refresh);
      }, 3000);
    } catch (e) {
      console.log(e);
      setAlert({ type: "error", message: e.message });
      setOpen(true);
    }
  };

  const handleClose = () => {
    setCategory(productCategory);
    setOpenDialog();
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle>
        {edicao ? "Editar anúncio" : "Deseja excluir esse anúncio?"}
      </DialogTitle>
      <DialogContent style={{ width: "500px" }}>
        <DialogContentText>
          {edicao
            ? "Atualize os novos campos."
            : "Após confirmar, a ação é irreversível."}
        </DialogContentText>
        {edicao ? (
          <>
            <Grid item xs={12} style={{ marginBottom: 12 }}>
              <TextField
                label="Titulo"
                name="title"
                fullWidth
                inputRef={titleRef}
                defaultValue={productTitle}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 12 }}>
              <TextField
                label="Descrição"
                name="description"
                multiline
                rows={3}
                fullWidth
                defaultValue={productDescription}
                inputRef={descriptionRef}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 12 }}>
              <TextField
                label="Preço"
                name="price"
                fullWidth
                type="number"
                inputRef={priceRef}
                defaultValue={productPrice}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 12 }}>
              <FormControl fullWidth name="category">
                <InputLabel>Categoria</InputLabel>
                <Select
                  defaultValue={productCategory}
                  label="Categoria"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATEGORIES_LIST.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleClick} color="primary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </Dialog>
  );
};
