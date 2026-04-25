import { combineReducers } from "redux";
import { shoppingCartReducer } from "./shoppingCartReducer";

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});