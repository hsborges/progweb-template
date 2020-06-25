import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router";
import APIService from "../../../utils/APIService";
import { SnackAlert } from "../../SnackAlert/SnackAlert";

export const AppMenu = ({ anchorEl, handleMenuClose }) => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const history = useHistory();
  const logado = !!localStorage.getItem("token");

  const logout = () => {
    APIService.logout()
      .then((res) => {
        localStorage.clear();
        handleMenuClose();
        setAlert({
          type: "success",
          message: `Deslogado com sucesso! Redirecionando...`,
        });
        setOpen(true);
        setTimeout(() => history.push("/"), 3000);
      })
      .catch((e) => {
        localStorage.clear();
        handleMenuClose();
        setAlert({ type: "error", message: `${e.message}. Redirecionando...` });
        setOpen(true);
        setTimeout(() => history.push("/"), 3000);
      });
  };

  const logar = () => {
    history.push("/login");
  };

  const cadastroUsuario = () => {
    history.push("/cadastro");
    handleMenuClose();
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {!logado && (
          <div>
            <MenuItem onClick={cadastroUsuario}>Criar conta</MenuItem>
            <MenuItem onClick={logar}>Login</MenuItem>
          </div>
        )}
        {logado && (
          <div>
            <MenuItem onClick={() => history.push("/conta")}>
              Minha conta
            </MenuItem>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </div>
        )}
      </Menu>
      <SnackAlert open={open} alert={alert} setOpen={setOpen} />
    </>
  );
};
