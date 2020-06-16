import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Categories } from "./Categories/Categories";
import {
  audioVideo,
  books,
  clothing,
  computers,
  homeEletro,
  phones,
  recentProducts,
  tools,
} from "../../utils/mock";
import { CATEGORIES } from "../../utils/enums";
import { ViewProducts } from "./ViewProduct/ViewProducts";
import { inputStyles } from "./styles";

export const Home = () => {
  const inputClasses = inputStyles();
  const [categoria, setCategoria] = useState(CATEGORIES.RECENTES);

  return (
    <div>
      <div style={{ backgroundColor: "#e33b5d", padding: "24px" }}>
        <TextField
          variant="outlined"
          placeholder="Buscar produto"
          fullWidth
          InputProps={{
            endAdornment: <Icon path={mdiMagnify} size={1} />,
            classes: inputClasses,
          }}
        />
        <Categories changeCategory={setCategoria} />
      </div>
      {categoria === CATEGORIES.RECENTES && (
        <ViewProducts products={recentProducts} title="Anúncios recentes" />
      )}
      {categoria === CATEGORIES.CELULARES && (
        <ViewProducts products={phones} title="Celulares" />
      )}
      {categoria === CATEGORIES.INFORMATICA && (
        <ViewProducts products={computers} title="Informática" />
      )}
      {categoria === CATEGORIES.AUDIO_VIDEO && (
        <ViewProducts products={audioVideo} title="Audio e Vídeo" />
      )}
      {categoria === CATEGORIES.VESTUARIO && (
        <ViewProducts products={clothing} title="Vestuário" />
      )}
      {categoria === CATEGORIES.ELETRODOMESTICOS && (
        <ViewProducts products={homeEletro} title="Eletrodomésticos" />
      )}
      {categoria === CATEGORIES.FERRAMENTAS && (
        <ViewProducts products={tools} title="Ferramentas" />
      )}
      {categoria === CATEGORIES.LIVROS && (
        <ViewProducts products={books} title="Livros" />
      )}
    </div>
  );
};
