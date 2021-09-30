import React from "react";
import { PriceFilterComponent } from "../../../../modules";

export default function PriceFilter({ price, setPrice }) {
  const handlePriceChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  function showPrice(price) {
    return `$${price}`;
  }

  return (
    <PriceFilterComponent
      price={price}
      showPrice={showPrice}
      handlePriceChange={handlePriceChange}
    />
  );
}
