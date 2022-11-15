import { ACTION_TYPES } from "./actionTypes";
import { ILoginData } from "../types/login";
export const login = (loginData: ILoginData) => {
  return {
    type: ACTION_TYPES.LOGIN,
    payload: loginData,
  };
};
