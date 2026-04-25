const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
};
export const productActionTypes = {
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
  SET_TOTAL: "SET_TOTAL",
  SET_FETCH_STATE: "SET_FETCH_STATE",
  SET_LIMIT: "SET_LIMIT",
  SET_OFFSET: "SET_OFFSET",
  SET_FILTER: "SET_FILTER",
  SET_PRODUCT: "SET_PRODUCT",
};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case productActionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case productActionTypes.SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case productActionTypes.SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    case productActionTypes.SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case productActionTypes.SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case productActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case productActionTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}