import React from "react";
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
import { CATEGORIES } from "../../../utils/enums";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import styled from "styled-components";

const defaultIconColor = "#e33b5d";

const StyledButton = styled(IconButton)`
  background-color: #fff;
  color: ${defaultIconColor};
  &:hover {
    color: #fff;
  }
`;

export const Categories = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.rootDiv}>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() => history.push(`/categoria/${CATEGORIES.CELULARES}`)}
        >
          <Icon path={mdiCellphoneIphone} size={1.5} />
        </StyledButton>
        <Typography>Celulares</Typography>
      </div>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() => history.push(`/categoria/${CATEGORIES.INFORMATICA}`)}
        >
          <Icon path={mdiLaptop} size={1.5} />
        </StyledButton>
        <Typography>Informática</Typography>
      </div>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() => history.push(`/categoria/${CATEGORIES.AUDIO_VIDEO}`)}
        >
          <Icon path={mdiTelevision} size={1.5} />
        </StyledButton>
        <Typography>Áudio e Vídeo</Typography>
      </div>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() => history.push(`/categoria/${CATEGORIES.VESTUARIO}`)}
        >
          <Icon path={mdiHanger} size={1.5} />
        </StyledButton>
        <Typography>Vestuário</Typography>
      </div>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() =>
            history.push(`/categoria/${CATEGORIES.ELETRODOMESTICOS}`)
          }
        >
          <Icon path={mdiWashingMachine} size={1.5} />
        </StyledButton>
        <Typography>Eletrodomésticos</Typography>
      </div>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() => history.push(`/categoria/${CATEGORIES.FERRAMENTAS}`)}
        >
          <Icon path={mdiHammerScrewdriver} size={1.5} />
        </StyledButton>
        <Typography>Ferramentas</Typography>
      </div>
      <div className={classes.iconLabel}>
        <StyledButton
          onClick={() => history.push(`/categoria/${CATEGORIES.LIVROS}`)}
        >
          <Icon path={mdiBookshelf} size={1.5} />
        </StyledButton>
        <Typography>Livros</Typography>
      </div>
    </div>
  );
};
