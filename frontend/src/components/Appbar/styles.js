import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  title: {
    display: "none",
    marginLeft: "12px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#000",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  link: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textDecoration: "none",
  },
  appBar: {
    margin: "0px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #e8e8e8",
  },
  registerButton: {
    width: "115px",
    borderRadius: "50px",
    backgroundColor: "#234099",
  },
  productButton: {
    fontWeight: "500",
    color: "#fff",
    fontSize: "16px",
    textTransform: "capitalize",
  },
}));
