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
import { CATEGORIES } from "../../../utils/enums";
import { useStyles } from "./styles";

export const Categories = ({ changeCategory }) => {
  const classes = useStyles();

  return (
    <div className={classes.rootDiv}>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.CELULARES)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiCellphoneIphone} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Celulares</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.INFORMATICA)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiLaptop} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Informática</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.AUDIO_VIDEO)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiTelevision} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Áudio e Vídeo</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.VESTUARIO)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiHanger} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Vestuário</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.ELETRODOMESTICOS)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiWashingMachine} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Eletrodomésticos</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.FERRAMENTAS)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiHammerScrewdriver} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Ferramentas</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => changeCategory(CATEGORIES.LIVROS)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiBookshelf} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Livros</Typography>
      </div>
    </div>
  );
};
