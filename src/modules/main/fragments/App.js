import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppComponent } from "../../../modules";
import { fetchAllProducts } from "../../products/redux/selectors";
import { bestSellingProductRate } from "../../../constants";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [price, setPrice] = useState([0, 1000]);
  const [minPrice, maxPrice] = price;
  const [searchQuery, setSearchQuery] = useState("");

  const products = useSelector(fetchAllProducts);

  const handleSearchQuery = (e, setSearchQuery) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery) &&
      product.price > minPrice &&
      product.price < maxPrice
    );
  });

  return (
    <AppComponent
      handleSearchQuery={handleSearchQuery}
      setSearchQuery={setSearchQuery}
      setPrice={setPrice}
      filteredProducts={filteredProducts}
      price={price}
      bestSellingProductRate={bestSellingProductRate}
    />
  );
}

export default App;
