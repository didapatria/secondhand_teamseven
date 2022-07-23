import { UPDATE_USER } from "./types";

import UserService from "../services/user.service";

export const updateUser =
  (fullName, city, address, phoneNumber, image) => async (dispatch) => {
    try {
      const res = await UserService.create({
        fullName,
        city,
        address,
        phoneNumber,
        image,
      });

      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
