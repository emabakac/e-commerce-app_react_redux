import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "0 4px 2px -2px grey",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  spacer: theme.mixins.toolbar,
  searchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "30%",
    borderRadius: theme.spacing(2),
    boxShadow: "0 0 5px grey",
    paddingLeft: theme.spacing(1.5),
    backgroundColor: "#fcf1cf",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "35%",
  },
  title: {
    width: "35%",
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    cursor: "pointer",
  },
}));
