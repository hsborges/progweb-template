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
    color: "#fff",
  };

  return (
    <div
      style={{
        marginTop: "24px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.CELULARES)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiCellphoneIphone} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Celulares</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.INFORMATICA)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiLaptop} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Informática</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.AUDIO_VIDEO)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiTelevision} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Áudio e Vídeo</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.VESTUARIO)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiHanger} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Vestuário</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.ELETRODOMESTICOS)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiWashingMachine} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Eletrodomésticos</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.FERRAMENTAS)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiHammerScrewdriver} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Ferramentas</Typography>
      </div>
      <div style={iconLabel}>
        <IconButton
          onClick={() => changeCategory(categories.LIVROS)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiBookshelf} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Livros</Typography>
      </div>
    </div>
  );
};
