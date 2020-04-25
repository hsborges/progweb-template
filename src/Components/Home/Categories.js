import IconButton from "@material-ui/core/IconButton";
import Icon from "@mdi/react";
import {
  mdiBookshelf,
  mdiCellphoneIphone,
  mdiHammerScrewdriver,
  mdiHanger,
  mdiLaptop,
  mdiTelevision,
  mdiWashingMachine,
} from "@mdi/js";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { categories } from "./enums";

export const Categories = ({ changeCategory }) => {
  const iconLabel = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div
      style={{
        marginTop: "12px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.CELULARES)}>
          <Icon path={mdiCellphoneIphone} size={2} />
        </IconButton>
        <Typography>Celulares</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.INFORMATICA)}>
          <Icon path={mdiLaptop} size={2} />
        </IconButton>
        <Typography>Informática</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.AUDIO_VIDEO)}>
          <Icon path={mdiTelevision} size={2} />
        </IconButton>
        <Typography>Áudio e Vídeo</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.VESTUARIO)}>
          <Icon path={mdiHanger} size={2} />
        </IconButton>
        <Typography>Vestuário</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.ELETRODOMESTICOS)}>
          <Icon path={mdiWashingMachine} size={2} />
        </IconButton>
        <Typography>Eletrodomésticos</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.FERRAMENTAS)}>
          <Icon path={mdiHammerScrewdriver} size={2} />
        </IconButton>
        <Typography>Ferramentas</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton onClick={() => changeCategory(categories.LIVROS)}>
          <Icon path={mdiBookshelf} size={2} />
        </IconButton>
        <Typography>Livros</Typography>
      </div>
    </div>
  );
};
