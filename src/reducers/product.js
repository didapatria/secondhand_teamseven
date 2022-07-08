import {
  PRODUCTS_FAIL,
  PRODUCTS_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
} from "../actions/types";

const product = JSON.parse(localStorage.getItem("product"));

const initialState = product ? { product } : { product: null };

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        product: payload.product,
      };
    case PRODUCTS_FAIL:
      return {
        ...state,
        product: null,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload.product,
      };
    case PRODUCT_FAIL:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
};
