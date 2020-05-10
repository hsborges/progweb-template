import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import {mdiMagnify} from "@mdi/js";
import Icon from "@mdi/react";
import {Categories} from "./Categories/Categories";
import {audioVideo, books, clothing, computers, homeEletro, phones, recentProducts, tools,} from "../../utils/mock";
import {categories} from "../../utils/enums";
import {ViewProducts} from "./ViewProduct/ViewProducts";
import {makeStyles} from "@material-ui/styles";

const inputStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
  },
  focused: {},
  notchedOutline: {
    border: "none",
  },
}));

export const Home = () => {
  const inputClasses = inputStyles();
  const [categoria, setCategoria] = useState(categories.RECENTES);

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
