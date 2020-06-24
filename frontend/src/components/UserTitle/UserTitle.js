import {
  Container,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiCheck, mdiClose, mdiPencil } from "@mdi/js";
import React, { useState } from "react";
import APIService from "../../utils/APIService";

const containerRoot = {
  marginBottom: "8px",
  marginTop: "12px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const UserTitle = ({ editable = false, name }) => {
  const [edicaoNome, setEdicaoNome] = useState(false);
  const [nome, setNome] = useState(name);
  const [nomeField, setNomeField] = useState(name);

  const handleSave = () => {
    if (nomeField === "") return;
    APIService.updateUser({ name: nomeField })
      .then((res) => {
        setNome(nomeField);
        setEdicaoNome(false);
      })
      .catch((e) => {
        setEdicaoNome(false);
        console.log(e);
      });
  };

  return (
    <Container style={containerRoot}>
      {!edicaoNome ? (
        <Typography gutterBottom variant="h5">
          {nome}
        </Typography>
      ) : (
        <>
          <TextField
            name="full-name"
            required
            value={nomeField}
            defaultValue={nome}
            onChange={(e) => setNomeField(e.target.value)}
          />
          <IconButton onClick={() => handleSave()}>
            <Icon path={mdiCheck} size={0.8} />
          </IconButton>
        </>
      )}
      {editable && (
        <IconButton onClick={() => setEdicaoNome(!edicaoNome)}>
          <Icon path={edicaoNome ? mdiClose : mdiPencil} size={0.8} />
        </IconButton>
      )}
    </Container>
  );
};
