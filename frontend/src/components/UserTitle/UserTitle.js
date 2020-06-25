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
import { SnackAlert } from "../SnackAlert/SnackAlert";

const containerRoot = {
  marginBottom: "8px",
  marginTop: "12px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const UserTitle = ({ editable = false, name }) => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);

  const [edicaoNome, setEdicaoNome] = useState(false);
  const [nome, setNome] = useState(name);
  const [nomeField, setNomeField] = useState(name);

  const handleSave = () => {
    if (nomeField === "") {
      setAlert({ type: "error", message: "Campo não pode estar vazio!" });
      setOpen(true);
      return;
    }

    APIService.updateUser({ name: nomeField })
      .then((res) => {
        setNome(nomeField);
        setAlert({
          type: "success",
          message: "Editado com sucesso!",
        });
        setOpen(true);
        setEdicaoNome(false);
      })
      .catch((e) => {
        console.log(e);
        setAlert({
          type: "error",
          message: `${e.message}`,
        });
        setOpen(true);
        setEdicaoNome(false);
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
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </Container>
  );
};
