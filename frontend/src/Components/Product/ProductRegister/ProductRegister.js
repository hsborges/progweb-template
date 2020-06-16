import React, {useState} from "react";
import {
    Button,
    CssBaseline,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography,
} from "@material-ui/core";
import {useHistory} from "react-router";
import {Appbar} from "../../Appbar/Appbar";
import APIService from "../../../../src/utils/APIService";
import {CATEGORIES} from "../../../utils/enums";
import Icon from "@mdi/react";
import {mdiCashUsdOutline, mdiImageSizeSelectActual} from "@mdi/js";
import MuiAlert from "@material-ui/lab/Alert";
import {useStyles} from "./styles";

const CATEGORIES_LIST = [
  { label: "Celulares", value: CATEGORIES.CELULARES },
  { label: "Informática", value: CATEGORIES.INFORMATICA },
  { label: "Áudio e Video", value: CATEGORIES.AUDIO_VIDEO },
  { label: "Vestuário", value: CATEGORIES.VESTUARIO },
  { label: "Eletrodomésticos", value: CATEGORIES.ELETRODOMESTICOS },
  { label: "Ferramentas", value: CATEGORIES.FERRAMENTAS },
  { label: "Livros", value: CATEGORIES.LIVROS },
];

export const ProductRegister = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });

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

      setAlert({ type: "success", message: "Anúncio Cadastrado com sucesso!" });
      setOpen(true);

      setTimeout(() => history.push("/"), 3000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Appbar />
      <CssBaseline />
      <div className={classes.paper}>
        <Grid
          container
          alignItems="center"
          style={{ maxWidth: "500px", justifyContent: "center" }}
        >
          <Typography variant="h5">Cadastrar Anúncio</Typography>
          <form style={{ width: "100%", padding: "3px" }}>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
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
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
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
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
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
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
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
                      style={{ marginRight: "8px" }}
                      path={mdiCashUsdOutline}
                      size={1}
                      color="#a0a0a0"
                    />
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
                      style={{ marginRight: "8px" }}
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
              style={{
                backgroundColor: "#e33b5d",
                marginTop: "12px",
                height: "40px",
              }}
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
      <Snackbar
        open={open}
        color="error"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          elevation={5}
          variant="filled"
          severity={alert.type}
          onClose={() => setOpen(false)}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
