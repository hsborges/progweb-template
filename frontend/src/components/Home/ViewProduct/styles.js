import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  rootDiv: {
    margin: "24px",
  },
  title: {
    marginBottom: "12px",
  },
  displayFlex: {
    display: "flex",
    justifyContent: "center",
  },
  loading: { height: "300px", display: "flex", alignItems: "center" },
  marginTop: { marginTop: "60px" },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
}));
