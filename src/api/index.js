import axios from "axios";
import {
  fetchAllProducts,
  getBestSellingProducts,
} from "../modules/products/redux/actions";

const url = "https://fakestoreapi.com/products";

export const fetchProducts = async (
  dispatch,
  productCategoryName,
  isLoading,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    const { data } = await axios.get(
      `${url}/${
        productCategoryName === "" ? "" : "category"
      }/${productCategoryName}`
    );
    dispatch(fetchAllProducts(data));
  } catch (error) {
    alert(error);
  } finally {
    setIsLoading(false);
  }
};

export const fetchBestSelling = async (dispatch, setIsLoading) => {
  try {
    setIsLoading(true);
    const { data } = await axios.get(url);
    dispatch(getBestSellingProducts(data));
  } catch (error) {
    alert(error);
  } finally {
    setIsLoading(false);
  }
};
