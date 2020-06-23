import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Appbar } from "../../components/Appbar/Appbar";
import APIService from "../../utils/APIService";
import { useHistory } from "react-router";
import { useStyles } from "./styles";
import MuiAlert from "@material-ui/lab/Alert";

export const RegisterUser = () => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleNameChange = (e) => setName(e.target.value);
  const handleNickNameChange = (e) => setNickname(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      nickname === "" ||
      password === "" ||
      email === "" ||
      phone === ""
    ) {
      setAlert({ type: "error", message: "Há um ou mais campos vazios!" });
      setOpen(true);
      return;
    }

    APIService.registerUser(name, nickname, email, phone, password)
      .then(() => {
        setAlert({
          type: "success",
          message: "Cadastrado com sucesso!",
        });
        setOpen(true);
        setTimeout(() => history.push("/login"), 3000);
      })
      .catch((error) => console.log(error)); // TODO: Adicionar tratativa
  };

  return (
    <>
      <Appbar />
      <CssBaseline />
      <div className={classes.paper}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ maxWidth: "500px" }}
        >
          <Grid
            item
            xs={12}
            style={{ marginBottom: "12px", justifyContent: "center" }}
          >
            <Typography variant="h5" align="center">
              Fazer Cadastro
            </Typography>
          </Grid>
          <form style={{ width: "100%" }}>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                label="Nome Completo"
                name="full-name"
                fullWidth
                variant="outlined"
                value={name}
                required
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                label="Nickname"
                fullWidth
                required
                name="nickname"
                variant="outlined"
                value={nickname}
                onChange={handleNickNameChange}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                required
                label="Email"
                name="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                required
                label="Telefone com DDD"
                name="phone"
                fullWidth
                variant="outlined"
                value={phone}
                type="number"
                onChange={handlePhoneChange}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                required
                label="Senha"
                name="password"
                fullWidth
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              disableElevation
              style={{
                backgroundColor: "#e33b5d",
              }}
            >
              Fazer Cadastro
            </Button>
          </form>
        </Grid>
      </div>
      <Snackbar
        open={open}
        color="error"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          elevation={5}
          variant="filled"
          severity={alert.type}
          onClose={() => setOpen(false)}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
