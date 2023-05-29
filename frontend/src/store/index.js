import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
