import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export const Menu = ({ anchorEl, handleMenuClose }) => {
  const isMenuOpen = Boolean(anchorEl);
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
      <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </Menu>
  );
};