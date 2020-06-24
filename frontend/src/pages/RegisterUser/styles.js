import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  marginCenter: { marginBottom: "12px", justifyContent: "center" },
  gridMax: { maxWidth: "500px" },
  formWidth: { width: "100%" },
  marginBottom: { marginBottom: "12px" },
  buttonBg: {
    backgroundColor: "#e33b5d",
  },
}));
