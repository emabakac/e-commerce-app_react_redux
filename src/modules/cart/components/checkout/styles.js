import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "40%",
  },
  creditCard: {
    padding: "5px 25px 0 25px",
  },
  creditCardConfirmed: {
    display: "flex",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-between",
    padding: "20px 0 20px 0",
  },
  orderConfirmationContainer: {
    width: "100%",
  },
  orderConfirmation: {
    width: "100%",
    padding: " 20px 0 0 40px",
  },
  orderCompleted: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "100%",
  },
  step: {
    "&$completed": {
      color: "#96034d",
    },
    "&$active": {
      color: theme.palette.secondary.main,
    },
  },
  completed: {},
  active: {},
}));
