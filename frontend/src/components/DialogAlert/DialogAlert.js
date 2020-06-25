import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { TextField } from "@material-ui/core";

export const DialogAlert = ({
  openDialog,
  setOpenDialog,
  handleDelete,
  edicao,
}) => {
  const handleClick = () => {
    if (!edicao) {
      handleDelete();
    }
  };

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog()}>
      <DialogTitle>
        {edicao ? "Editar anúncio" : "Deseja excluir esse anúncio?"}
      </DialogTitle>
      <DialogContent style={{ width: "500px" }}>
        <DialogContentText>
          {edicao
            ? "Atualize os novos campos."
            : "Após confirmar, a ação é irreversível."}
        </DialogContentText>
        {edicao ? (
          <TextField label="Titulo" name="title" fullWidth required />
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog()} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleClick} color="primary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
