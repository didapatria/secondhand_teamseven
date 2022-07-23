import { CREATE_PRODUCT } from "../actions/types";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return [...state, payload];

    default:
      return state;
  }
};
