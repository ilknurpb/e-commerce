import api from "../../api/axios";
import {
  setCategories,
  setProductList,
  setTotal,
  setFetchState,
  setProduct,
} from "../actions/productActions";

export const fetchCategoriesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { product } = getState();

    if (product.categories && product.categories.length > 0) {
      return;
    }

    try {
      const response = await api.get("/categories");
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error("Categories alınamadı:", error);
    }
  };
};
export const fetchProducts = (params = {}) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const queryParams = new URLSearchParams();

      if (params.category) {
        queryParams.append("category", params.category);
      }

      if (params.filter) {
        queryParams.append("filter", params.filter);
      }

      if (params.sort) {
        queryParams.append("sort", params.sort);
      }

      if (params.limit) {
        queryParams.append("limit", params.limit);
      }

      if (params.offset || params.offset === 0) {
        queryParams.append("offset", params.offset);
      }

      const queryString = queryParams.toString();
      const url = queryString ? `/products?${queryString}` : "/products";

      const response = await api.get(url);

      dispatch(setTotal(response.data.total));
      dispatch(setProductList(response.data.products));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Products alınamadı:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};
export const fetchProductById = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const response = await api.get(`/products/${productId}`);

      dispatch(setProduct(response.data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Product detay alınamadı:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};