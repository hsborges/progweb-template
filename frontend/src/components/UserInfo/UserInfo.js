import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheck, mdiClose, mdiPencil } from "@mdi/js";
import APIService from "../../utils/APIService";
import { SnackAlert } from "../SnackAlert/SnackAlert";

export const UserInfo = ({ user, editable = false }) => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);

  const [edicaoPhone, setEdicaoPhone] = useState(false);
  const [phone, setPhone] = useState(user.phone);
  const [phoneField, setPhoneField] = useState(user.phone);

  const handleSave = () => {
    if (phoneField === "") {
      setAlert({ type: "error", message: "Campo não pode estar vazio!" });
      setOpen(true);
      return;
    }

    APIService.updateUser({ phone: phoneField })
      .then((res) => {
        setPhone(phoneField);
        setAlert({
          type: "success",
          message: "Editado com sucesso!",
        });
        setOpen(true);
        setEdicaoPhone(false);
      })
      .catch((e) => {
        console.log(e);
        setAlert({
          type: "error",
          message: `${e.message}`,
        });
        setOpen(true);
        setEdicaoPhone(false);
      });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6">Informações</Typography>
      </div>
      <TableContainer component={Paper} style={{ marginTop: "12px" }}>
        <Table size="small">
          <TableBody>
            <TableRow style={{ height: "48px" }}>
              <TableCell component="th" scope="row">
                Nick
              </TableCell>
              <TableCell align="right">{user?.nickname}</TableCell>
            </TableRow>
            <TableRow style={{ height: "48px" }}>
              <TableCell component="th" scope="row">
                Telefone
              </TableCell>
              <TableCell align="right">
                {!edicaoPhone ? (
                  phone
                ) : (
                  <>
                    <TextField
                      name="phone"
                      required
                      value={phoneField}
                      defaultValue={phone}
                      onChange={(e) => setPhoneField(e.target.value)}
                    />
                    <IconButton onClick={() => handleSave()}>
                      <Icon path={mdiCheck} size={0.8} />
                    </IconButton>
                  </>
                )}
                {editable && (
                  <IconButton onClick={() => setEdicaoPhone(!edicaoPhone)}>
                    <Icon
                      path={edicaoPhone ? mdiClose : mdiPencil}
                      size={0.6}
                    />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "48px" }}>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="right">{user?.email}</TableCell>
            </TableRow>
            <TableRow style={{ height: "48px" }}>
              <TableCell component="th" scope="row">
                Entrou em
              </TableCell>
              <TableCell align="right">
                {new Date(user?.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </>
  );
};
