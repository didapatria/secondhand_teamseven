import { CREATE_PRODUCT } from "./types";

import ProductService from "../services/product.service";

export const createProduct =
  (name, price, categoryId, description, images) => async (dispatch) => {
    try {
      const res = await ProductService.create({
        name,
        price,
        categoryId,
        description,
        images,
      });

      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
