import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./types";

import ProductService from "../services/product.service";

export const createProduct =
  (name, price, categoryId, description, images, address) =>
  async (dispatch) => {
    try {
      const res = await ProductService.create({
        name,
        price,
        categoryId,
        description,
        images,
        address,
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

export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await ProductService.update(id, data);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductService.remove(id);

    dispatch({
      type: DELETE_PRODUCT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
