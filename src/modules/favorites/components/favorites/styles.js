import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  div: {
    height: theme.spacing(2.5),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  favoriteItemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: theme.spacing(2.5),
  },
  noItemsInFavoritesMessage: {
    display: "flex",
    justifyContent: "center",
    fontSize: theme.spacing(2.5),
    marginTop: theme.spacing(3.5),
  },
  title: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3.5, 0),
    fontSize: theme.spacing(4),
  },
}));
