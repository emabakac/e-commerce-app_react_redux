export const displayBestSellingProducts = (state, bestSellingProductRate) => {
  const bestSelling = state.products.bestSellingProducts.filter(
    (product) => product.rating.rate > bestSellingProductRate
  );
  return bestSelling;
};
