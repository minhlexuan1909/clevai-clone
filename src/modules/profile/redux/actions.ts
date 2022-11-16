import { ACTION_TYPES } from "./actionTypes";
export const getInfo = (token: string) => {
  return {
    type: ACTION_TYPES.GET_INFO,
    payload: token,
  };
};
