import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "12px",
  },
  image: {
    width: 512,
    height: 512,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 24,
    color: "white",
    backgroundColor: green[500],
    fontFamily: "Roboto",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}));
