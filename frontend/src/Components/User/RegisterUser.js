import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Appbar } from "../Appbar/Appbar";
import { useHistory } from "react-router";

export const RegisterUser = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleNameChange = (e) => setName(e.target.value);
  const handleNickNameChange = (e) => setNickName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("nome", name);
    console.log("apelido", nickName);
    console.log("email", email);
    console.log("senha", password);
    /*
    APIService.RegisterUser(email, password).then((response) => {
        const { token, email } = response;
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        history.push("/");
    });
    */
  };

  return (
    <>
      <div>
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
                placeholder="Name"
                fullWidth
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "12px" }}>
              <TextField
                placeholder="NickName"
                fullWidth
                variant="outlined"
                value={nickName}
                onChange={handleNickNameChange}
              />
            </Grid>
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
              Fazer Cadastro
            </Button>
          </form>
        </Grid>
      </div>
    </>
  );
};
