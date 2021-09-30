import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { ProductsComponent } from "../../../../modules";
import { fetchProducts } from "../../../../api";

export default function Products({
  filteredProducts,
  bestSellingProductRate,
  price,
  setPrice,
}) {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const productCategoryName = categoryName ? categoryName : "";

  useEffect(() => {
    fetchProducts(dispatch, productCategoryName, isLoading, setIsLoading);
  }, [dispatch, productCategoryName]);

  return (
    <ProductsComponent
      filteredProducts={filteredProducts}
      bestSellingProductRate={bestSellingProductRate}
      price={price}
      setPrice={setPrice}
      isLoading={isLoading}
    />
  );
}
