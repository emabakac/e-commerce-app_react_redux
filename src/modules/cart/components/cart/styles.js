import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cartContainer: {
    display: "flex",
  },
  checkoutContainer: {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  div: {
    height: theme.spacing(5),
  },
  checkoutButton: {
    margin: theme.spacing(5),
  },
  emptyCartButton: {
    margin: theme.spacing(0, 5),
  },
  gridContainer: {
    padding: theme.spacing(1, 4),
  },
  noItemsInCartMessage: {
    display: "flex",
    justifyContent: "center",
    fontSize: theme.spacing(2.5),
  },
  orderSummary: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: 0,
    width: "30%",
  },
  purchaseMadeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  title: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3.5),
  },
  total: {
    margin: theme.spacing(5),
    fontSize: theme.spacing(2.5),
  },
}));
