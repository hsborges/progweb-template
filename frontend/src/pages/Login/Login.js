import React, { useState } from "react";
import {
  Avatar,
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

export const Login = () => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert({ type: "error", message: "Há um ou mais campos vazios!" });
      setOpen(true);
      return;
    }

    APIService.login(email, password)
      .then((response) => {
        const { token, profile } = response;
        localStorage.setItem("token", token);
        localStorage.setItem("userProfile", JSON.stringify(profile));
        setAlert({
          type: "success",
          message: "Logado com sucesso! Redirecionando...",
        });
        setOpen(true);
        setTimeout(() => history.push("/"), 3000);
      })
      .catch((e) => {
        console.log(e);
        setAlert({ type: "error", message: e.message });
        setOpen(true);
      });
  };

  return (
    <>
      <Appbar />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img
            alt="minha lojinha"
            src="/logo-only.png"
            style={{ maxWidth: "45px" }}
          />
        </Avatar>
        <Typography variant="h5" align="center">
          Fazer Login
        </Typography>
        <Grid style={{ maxWidth: "500px" }}>
          <form className={classes.form}>
            <Grid item xs={12} className={classes.gridMargin}>
              <TextField
                margin="normal"
                required
                autoComplete="email"
                autoFocus
                placeholder="Email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridMargin}>
              <TextField
                margin="normal"
                required
                autoComplete="current-password"
                placeholder="Senha"
                fullWidth
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Button
              className={classes.buttonBg}
              type="submit"
              fullWidth
              disableElevation
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Fazer login
            </Button>
          </form>
        </Grid>
      </div>
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </>
  );
};
