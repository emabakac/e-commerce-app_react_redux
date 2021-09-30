import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HomePageComponent } from "../../../modules";
import { displayBestSellingProducts } from "../redux/selectors";
import { bestSellingProductRate } from "../../../constants";
import { fetchBestSelling } from "../../../api";

export default function HomePage() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBestSelling(dispatch, setIsLoading);
  }, [dispatch]);

  const bestSelling = useSelector((state) =>
    displayBestSellingProducts(state, bestSellingProductRate)
  );

  return (
    <HomePageComponent
      bestSelling={bestSelling}
      bestSellingProductRate={bestSellingProductRate}
      isLoading={isLoading}
    />
  );
}
