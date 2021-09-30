import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: theme.spacing(88),
    margin: theme.spacing(0.5),
    borderRadius: theme.spacing(1.5),
    boxShadow: "0 0 5px grey",
    backgroundColor: "white",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    width: "10%",
    height: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
    height: "100%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "100%",
    margin: theme.spacing(2.5),
  },
  image: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  price: {
    display: "flex",
    justifyContent: "center",
    width: "10%",
  },
}));
