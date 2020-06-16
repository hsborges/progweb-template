import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  FormGroup,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { Appbar } from "../../Appbar/Appbar";
import APIService from "../../../../src/utils/APIService";
import { CATEGORIES } from "../../../utils/enums";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Icon from "@mdi/react";
import { mdiCashUsdOutline, mdiImageSizeSelectActual } from "@mdi/js";

const categoriesList = [
  { label: "Celulares", value: CATEGORIES.CELULARES },
  { label: "Informática", value: CATEGORIES.INFORMATICA },
  { label: "Áudio e Video", value: CATEGORIES.AUDIO_VIDEO },
  { label: "Vestuário", value: CATEGORIES.VESTUARIO },
  { label: "Eletrodomésticos", value: CATEGORIES.ELETRODOMESTICOS },
  { label: "Ferramentas", value: CATEGORIES.FERRAMENTAS },
  { label: "Livros", value: CATEGORIES.LIVROS },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginRight: "200px",
    marginTop: theme.spacing(1),
  },
}));

export const ProductRegister = () => {
  const history = useHistory();
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    APIService.storeProduct(title, description, category, price, image)
      .then(() => {
        console.log("Anúncio Cadastrado com sucesso");
        history.push("/");
      })
      .catch((error) => console.log(error));
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
          <FormGroup style={{ width: "100%", padding: "3px" }}>
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
                  {categoriesList.map(({ label, value }) => (
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
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                label="URL da Imagem"
                name="image-url"
                fullWidth
                required
                variant="outlined"
                value={image}
                onChange={handleImageChange}
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
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#e33b5d" }}
              onClick={handleSubmit}
              disableElevation
            >
              Cadastrar Anúncio
            </Button>
          </FormGroup>
        </Grid>
      </div>
    </>
  );
};
