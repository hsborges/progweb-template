import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Appbar } from "../../components/Appbar/Appbar";
import APIService from "../../utils/APIService";
import { useHistory } from "react-router";
import { useStyles } from "./styles";
import { SnackAlert } from "../../components/SnackAlert/SnackAlert";

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
          message: "Cadastrado com sucesso! Redirecionando...",
        });
        setOpen(true);
        setTimeout(() => history.push("/login"), 3000);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          type: "error",
          message: error.message,
        });
        setOpen(true);
      });
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
          className={classes.gridMax}
        >
          <Grid item xs={12} className={classes.marginCenter}>
            <Typography variant="h5" align="center">
              Fazer Cadastro
            </Typography>
          </Grid>
          <form className={classes.formWidth}>
            <Grid item xs={12} className={classes.marginBottom}>
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
            <Grid item xs={12} className={classes.marginBottom}>
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
            <Grid item xs={12} className={classes.marginBottom}>
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
            <Grid item xs={12} className={classes.marginBottom}>
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
            <Grid item xs={12} className={classes.marginBottom}>
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
              className={classes.buttonBg}
            >
              Fazer Cadastro
            </Button>
          </form>
        </Grid>
      </div>
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </>
  );
};
