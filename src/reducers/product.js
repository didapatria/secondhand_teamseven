import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/types";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return [...state, payload];

    case UPDATE_PRODUCT:
      return state.map((state) => {
        if (state.id === payload.id) {
          return {
            ...state,
            ...payload,
          };
        }
        return state;
      });

    case DELETE_PRODUCT:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};
