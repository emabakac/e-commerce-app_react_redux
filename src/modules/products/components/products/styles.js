import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  products: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: theme.spacing(5),
  },
}));
