import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { Appbar } from "../../components/Appbar/Appbar";
import APIService from "../../utils/APIService";
import Icon from "@mdi/react";
import { mdiCashUsdOutline, mdiImageSizeSelectActual } from "@mdi/js";
import { useStyles } from "./styles";
import { SnackAlert } from "../../components/SnackAlert/SnackAlert";
import { CATEGORIES_LIST } from "../../utils/enums";

export const ProductRegister = () => {
  const history = useHistory();
  const logado = !!localStorage.getItem("token");
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      category === "" ||
      price === "" ||
      image === ""
    ) {
      setAlert({ type: "error", message: "Há um ou mais campos vazios!" });
      setOpen(true);
      return;
    }

    try {
      const uploadImage = await APIService.uploadImage(image);
      await APIService.storeProduct(
        title,
        description,
        category,
        price,
        uploadImage
      );

      setAlert({
        type: "success",
        message: "Anúncio Cadastrado com sucesso! Redirecionando...",
      });
      setOpen(true);

      setTimeout(() => history.push("/conta"), 3000);
    } catch (e) {
      console.log(e);
      setAlert({ type: "error", message: e.message });
      setOpen(true);
    }
  };

  if (!logado) {
    window.location.href = "/login";
  }

  return (
    <>
      <Appbar />
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container alignItems="center" className={classes.gridCenter}>
          <Typography variant="h5">Cadastrar Anúncio</Typography>
          <form className={classes.formWidth}>
            <Grid item xs={12} className={classes.gridMargin}>
              <TextField
                label="Titulo"
                name="title"
                fullWidth
                required
                variant="outlined"
                value={title}
                onChange={handleTitleChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridMargin}>
              <TextField
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                label="Descrição"
                name="description"
                value={description}
                required
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridMargin}>
              <FormControl
                variant="outlined"
                fullWidth
                required
                name="category"
              >
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  label="Categoria"
                >
                  <MenuItem value="no_category">
                    <em>Nenhuma</em>
                  </MenuItem>
                  {CATEGORIES_LIST.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.gridMargin}>
              <TextField
                label="Preço"
                name="price"
                fullWidth
                required
                variant="outlined"
                type="number"
                value={price}
                onChange={handlePriceChange}
                InputProps={{
                  startAdornment: (
                    <Icon
                      className={classes.iconMargin}
                      path={mdiCashUsdOutline}
                      size={1}
                      color="#a0a0a0"
                    />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridBetween}>
              <TextField
                style={{ width: "70%" }}
                disabled
                label="Imagem"
                name="image-url"
                variant="outlined"
                value={image && image.name}
                InputProps={{
                  startAdornment: (
                    <Icon
                      className={classes.iconMargin}
                      path={mdiImageSizeSelectActual}
                      size={1}
                      color="#a0a0a0"
                    />
                  ),
                }}
              />
              <div>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  onChange={handleImageChange}
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    size="large"
                    style={{ height: "56px" }}
                  >
                    Selecionar
                  </Button>
                </label>
              </div>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
              onClick={handleSubmit}
              disableElevation
              fullWidth
              disabled={alert.type === "success"}
            >
              Cadastrar Anúncio
            </Button>
          </form>
        </Grid>
      </div>
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </>
  );
};
