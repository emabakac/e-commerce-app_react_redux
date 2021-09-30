import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    width: "30px",
    height: "30px",
    outline: "none",
    border: ".5px solid grey",
    borderRadius: "50%",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: "#fcf1cf",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginBottom: theme.spacing(2.5),
    boxShadow: "0 0 5px grey",
    borderRadius: "10px",
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
  changeAmount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  image: {
    width: "110px",
    height: "110px",
  },
  media: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "100%",
    margin: "20px",
  },
  price: {
    display: "flex",
    justifyContent: "center",
    width: "10%",
  },
}));
