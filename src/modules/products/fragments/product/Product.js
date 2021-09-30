import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "../../../../modules";
import { fetchProductsFromFavorites } from "../../../ui/navbar/redux/selectors";
import { addProductToCart } from "../../../cart/redux/actions";
import {
  addProductToFavorites,
  deleteProductFromFavorites,
} from "../../../favorites/redux/actions";

const Product = ({ product, bestSellingProductRate }) => {
  const dispatch = useDispatch();

  const [heartIconActive, setHeartIconActive] = useState(false);

  const favorites = useSelector(fetchProductsFromFavorites);

  const checkFavorites = () => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === product.id) {
        setHeartIconActive(true);
      }
    }
  };

  const addToCart = () => {
    dispatch(addProductToCart(product));
  };

  const addToFavorites = () => {
    dispatch(addProductToFavorites(product));
    setHeartIconActive(true);
  };

  const deleteFromFavorites = () => {
    dispatch(deleteProductFromFavorites(product.id));
    setHeartIconActive(false);
  };

  useEffect(() => {
    checkFavorites();
  });

  return (
    <ProductComponent
      product={product}
      bestSellingProductRate={bestSellingProductRate}
      heartIconActive={heartIconActive}
      addToFavorites={addToFavorites}
      deleteFromFavorites={deleteFromFavorites}
      addToCart={addToCart}
    />
  );
};

export default Product;
