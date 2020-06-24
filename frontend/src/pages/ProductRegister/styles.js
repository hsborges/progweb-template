import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gridCenter: { maxWidth: "500px", justifyContent: "center" },
  formWidth: { width: "100%", padding: "3px" },
  gridMargin: { marginBottom: "12px" },
  iconMargin: { marginRight: "8px" },
  gridBetween: {
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#e33b5d",
    marginTop: "12px",
    height: "40px",
  },
}));
