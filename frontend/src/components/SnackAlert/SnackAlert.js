import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import React from "react";

export const SnackAlert = ({
  open = false,
  setOpen = () => {},
  alert = {},
}) => {
  return (
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
  );
};
