import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cart, Favorites, HomePage, Navbar, Products } from "../../../modules";
import { routes } from "../../../routes";
import "./AppComponent.css";

export default function AppComponent({
  handleSearchQuery,
  setSearchQuery,
  setPrice,
  filteredProducts,
  price,
  bestSellingProductRate,
}) {
  return (
    <Router>
      <div className="App">
        <Navbar
          handleSearchQuery={(e) => handleSearchQuery(e, setSearchQuery)}
        />
        <Switch>
          <Route exact path={routes.HOME}>
            <HomePage />
          </Route>
          <Route path={routes.PRODUCT_CATEGORY}>
            <Products
              filteredProducts={filteredProducts}
              bestSellingProductRate={bestSellingProductRate}
              price={price}
              setPrice={setPrice}
            />
          </Route>
          <Route path={routes.FAVORITES} component={Favorites} />
          <Route path={routes.CART} component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}
