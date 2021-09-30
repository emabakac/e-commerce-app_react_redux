import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: theme.spacing(29),
    height: theme.spacing(29),
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: theme.spacing(31),
  },
  rating: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2.5),
    fontSize: theme.spacing(2),
  },
  ratingCount: {
    margin: "3px 0 0 5px",
  },
  tag: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: theme.spacing(21),
    height: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(1.5),
    color: "red",
    backgroundColor: "lightgrey",
    opacity: "0.8",
  },
}));
