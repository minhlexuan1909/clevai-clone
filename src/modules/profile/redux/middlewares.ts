import { Store } from "redux";
import { MiddlewareRegistry } from "src/modules/base";

import { IResponse } from "../../base/types/request";
import { ACTION_TYPES } from "./actionTypes";
import { getUserInfo } from "./services";

const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_INFO: {
        dispatch({
          type: ACTION_TYPES.GET_INFO_CALLING,
        });
        try {
          const getInfoResponse: IResponse<object> = await getUserInfo(
            action.payload
          );
          dispatch({
            type: ACTION_TYPES.GET_INFO_SUCCESS,
          });
          return dispatch({
            type: ACTION_TYPES.SET_DATA,
            data: getInfoResponse,
          });
        } catch (error: any) {
          // if (error.status === STATUS_CODE.INTERNAL_ERROR) {
          //   return dispatch({
          //     type: ACTION_TYPES.GE,
          //   });
          // }
          return dispatch({
            type: ACTION_TYPES.GET_INFO_ERROR,
          });
        }
      }
    }
  };

MiddlewareRegistry.register(middleware);
