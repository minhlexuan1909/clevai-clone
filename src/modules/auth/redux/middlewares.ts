import { Store } from "redux";
import { MiddlewareRegistry } from "src/modules/base";

import { IResponse } from "../../base/types/request";
import { ACTION_TYPES } from "./actionTypes";
import { loginApi } from "./services";
import { STATUS_CODE } from "../../base/redux/services";

const middleware =
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
          dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
          });
          return dispatch({
            type: ACTION_TYPES.SET_DATA,
            data: loginResponse.data,
          });
        } catch (error: any) {
          if (error.status === STATUS_CODE.INTERNAL_ERROR) {
            return dispatch({
              type: ACTION_TYPES.LOGIN_TIMEOUT,
            });
          }
          return dispatch({
            type: ACTION_TYPES.LOGIN_ERROR,
          });
        }
      }
    }
  };

MiddlewareRegistry.register(middleware);
