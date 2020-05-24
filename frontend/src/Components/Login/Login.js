import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Appbar } from "../Appbar/Appbar";
import APIService from "../../utils/APIService";
import { useHistory } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ maxWidth: "500px" }}
      >
        <form style={{ width: "100%" }}>
          <Grid item xs={12} style={{ marginBottom: "12px" }}>
            <TextField
              placeholder="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "12px" }}>
            <TextField
              placeholder="Senha"
              fullWidth
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Fazer login
          </Button>
        </form>
      </Grid>
    </>
  );
};
