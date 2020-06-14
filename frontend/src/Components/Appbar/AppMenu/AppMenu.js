import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router";
import APIService from "../../../utils/APIService";

export const AppMenu = ({ anchorEl, handleMenuClose }) => {
  const isMenuOpen = Boolean(anchorEl);
  const history = useHistory();

  const logout = () => {
    APIService.logout().then(() => {
      localStorage.clear();
      history.push("/");
      handleMenuClose();
    });
  };

  const logar = () => {
    history.push("/login");
  }

  let logado = localStorage.getItem('token') !== null || localStorage.getItem('token') !== undefined ? true : false;  // pegar o token do localstore

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      { logado === false &&
        <MenuItem onClick={logar}>Login</MenuItem>
      }
      { logado  &&
        <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
        &&
        <MenuItem onClick={logout}>Sair</MenuItem>
      }
    </Menu>
  );
};
