import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  InputBase,
} from "@material-ui/core";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart } from "@material-ui/icons";
import { Sidebar, Typography } from "../../../../modules";
import { routes } from "../../../../routes";
import useStyles from "./styles";

export default function NavbarComponent({
  history,
  pathname,
  favorites,
  totalItems,
  handleSearchQuery,
}) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            onClick={() => history.push(routes.HOME)}
            text="E-Commerce"
          />
          {pathname === "/" ||
          pathname === "/cart" ||
          pathname === "/cart/checkout" ||
          pathname === "/favorites" ? (
            <div style={{ width: "30%" }} />
          ) : (
            <div className={classes.searchContainer}>
              <IconButton color="default" style={{ pointerEvents: "none" }}>
                <SearchIcon />
              </IconButton>
              <InputBase
                type="text"
                placeholder="Search by title"
                onChange={handleSearchQuery}
                style={{ width: "85%" }}
              />
            </div>
          )}
          {pathname !== "/cart/checkout" && (
            <div className={classes.buttons}>
              <IconButton
                aria-label="Show favorites"
                color={!favorites.length ? "inherit" : "secondary"}
                onClick={() => history.push(routes.FAVORITES)}
              >
                <FavoriteTwoToneIcon />
              </IconButton>
              <IconButton
                aria-label="Show cart items"
                color="inherit"
                onClick={() => history.push(routes.CART)}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <Sidebar />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </>
  );
}
