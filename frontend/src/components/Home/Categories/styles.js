import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  iconLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
  },
  rootDiv: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-around",
  },
}));
