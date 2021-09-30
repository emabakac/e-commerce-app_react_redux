import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  priceFilter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(65),
    marginTop: theme.spacing(4),
  },
  priceRange: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  slider: {
    margin: theme.spacing(0, 1.5),
  },
}));
