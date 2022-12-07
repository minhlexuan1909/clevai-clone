import { ACTION_TYPES } from "./actionTypes";
import { ILoginData } from "../types/login";
export const login = (loginData: ILoginData) => {
  return {
    type: ACTION_TYPES.LOGIN,
    payload: loginData,
  };
};
export const resetLoginState = () => {
  return {
    type: ACTION_TYPES.LOGIN_DEFAULT,
  };
};
export const resetData = () => {
  return {
    type: ACTION_TYPES.RESET_DATA,
  };
};
