import { Store } from "redux";
import { MiddlewareRegistry } from "src/modules/base";

import { IResponse } from "../../base/types/request";
import { ACTION_TYPES } from "./actionTypes";
import { loginApi } from "./services";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.LOGIN: {
        dispatch({
          type: ACTION_TYPES.LOGIN_CALLING,
        });
        try {
          const loginResponse: IResponse<object> = await loginApi(
            action.payload
          );
          console.log(loginResponse);
          dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
          });
          return dispatch({
            type: ACTION_TYPES.SET_DATA,
            data: loginResponse.data,
          });
        } catch (error) {
          return dispatch({
            type: ACTION_TYPES.LOGIN_ERROR,
          });
        }
      }
    }
  };

MiddlewareRegistry.register(middleware);
