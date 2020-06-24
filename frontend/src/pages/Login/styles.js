import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
  gridMargin: { marginBottom: "12px" },
  buttonBg: {
    backgroundColor: "#e33b5d",
  },
}));
