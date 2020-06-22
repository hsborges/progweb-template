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

export const RegisterUser = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleNameChange = (e) => setName(e.target.value);
  const handleNickNameChange = (e) => setNickname(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    APIService.registerUser(name, nickname, email, password)
      .then(() => {
        history.push("/login");
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
    </>
  );
};
