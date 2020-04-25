import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Categories } from "./Categories";
import Divider from "@material-ui/core/Divider";
import {
  audioVideo,
  books,
  clothing,
  computers,
  homeEletro,
  phones,
  recentProducts,
  tools,
} from "./mock";
import { categories } from "./enums";
import { ViewProducts } from "./ViewProducts";

export const Home = () => {
  const [categoria, setCategoria] = useState(categories.RECENTES);

  return (
    <div style={{ marginTop: "24px" }}>
      <TextField
        variant="outlined"
        placeholder="Buscar produto"
        fullWidth
        InputProps={{
          endAdornment: <Icon path={mdiMagnify} size={1} />,
        }}
      />
      <Categories changeCategory={setCategoria} />
      <Divider style={{ marginTop: "12px" }} />
      {categoria === categories.RECENTES && (
        <ViewProducts products={recentProducts} title="Anúncios recentes" />
      )}
      {categoria === categories.CELULARES && (
        <ViewProducts products={phones} title="Celulares" />
      )}
      {categoria === categories.INFORMATICA && (
        <ViewProducts products={computers} title="Informática" />
      )}
      {categoria === categories.AUDIO_VIDEO && (
        <ViewProducts products={audioVideo} title="Audio e Vídeo" />
      )}
      {categoria === categories.VESTUARIO && (
        <ViewProducts products={clothing} title="Vestuário" />
      )}
      {categoria === categories.ELETRODOMESTICOS && (
        <ViewProducts products={homeEletro} title="Eletrodomésticos" />
      )}
      {categoria === categories.FERRAMENTAS && (
        <ViewProducts products={tools} title="Ferramentas" />
      )}
      {categoria === categories.LIVROS && (
        <ViewProducts products={books} title="Livros" />
      )}
    </div>
  );
};
