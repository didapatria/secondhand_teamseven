import {
  PRODUCTS_FAIL,
  PRODUCTS_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
  SET_MESSAGE,
} from "./types";

import ProductService from "../services/product.service";

export const products = (search, page, size) => (dispatch) => {
  return ProductService.products(search, page, size).then(
    (response) => {
      dispatch({
        type: PRODUCTS_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: PRODUCTS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const product = (id) => (dispatch) => {
  return ProductService.product(id).then(
    (response) => {
      dispatch({
        type: PRODUCT_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: PRODUCT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};
