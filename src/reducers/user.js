import { UPDATE_USER } from "../actions/types";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      return [...state, payload];

    default:
      return state;
  }
};
