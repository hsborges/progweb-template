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
import { useHistory } from "react-router";

export const Categories = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.rootDiv}>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => history.push(`/categoria/${CATEGORIES.CELULARES}`)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiCellphoneIphone} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Celulares</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => history.push(`/categoria/${CATEGORIES.INFORMATICA}`)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiLaptop} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Informática</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => history.push(`/categoria/${CATEGORIES.AUDIO_VIDEO}`)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiTelevision} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Áudio e Vídeo</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => history.push(`/categoria/${CATEGORIES.VESTUARIO}`)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiHanger} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Vestuário</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() =>
            history.push(`/categoria/${CATEGORIES.ELETRODOMESTICOS}`)
          }
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiWashingMachine} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Eletrodomésticos</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => history.push(`/categoria/${CATEGORIES.FERRAMENTAS}`)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiHammerScrewdriver} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Ferramentas</Typography>
      </div>
      <div className={classes.iconLabel}>
        <IconButton
          onClick={() => history.push(`/categoria/${CATEGORIES.LIVROS}`)}
          style={{ backgroundColor: "#fff" }}
        >
          <Icon path={mdiBookshelf} size={1.5} color="#e33b5d" />
        </IconButton>
        <Typography>Livros</Typography>
      </div>
    </div>
  );
};
