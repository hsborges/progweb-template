import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  flexJustify: { display: "flex", justifyContent: "center" },
  marginCenter: { margin: "24px 0 24px 0", justifyContent: "center" },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  marginTop: {
    marginTop: "12px",
  },
}));
