import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  makeStyles,
  Typography,
  CssBaseline,
  Avatar,
} from "@material-ui/core";
import { Appbar } from "../Appbar/Appbar";
import APIService from "../../utils/APIService";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%",
    marginRight: "200px",
    marginTop: theme.spacing(1),
  },
  subimit: {
    borderRadius: "100px",
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    APIService.login(email, password).then((response) => {
      const { token, email } = response;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      history.push("/");
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
        <Typography component="h1" variant="h5" align="center">
          Fazer Login
        </Typography>
        <Grid style={{ maxWidth: "500px" }}>
          <form className={classes.form}>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
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
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
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
              style={{
                backgroundColor: "#e33b5d",
              }}
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
    </>
  );
};
