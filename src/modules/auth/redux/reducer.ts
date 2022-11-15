import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";
import { LOGIN_STATE } from "../utils/constants";

const initState = {
  auth: {
    data: {
      original_id: 11196,
      account_id: "",
      student_id: null,
      specific_object_id: null,
      access_token: "",
      refresh_token: "",
      roles: [],
      username: "",
      name: "",
      email: null,
      first_name: null,
      last_name: null,
      full_name: "",
      account_status: "",
      principal: "",
      expires_in: null,
      avatar: "",
      first_time_login: false,
    },
    state: null,
  },
};

ReducerRegistry.register("auth", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ACTION_TYPES.LOGIN_CALLING:
      return {
        ...state,
        state: LOGIN_STATE.CALLING,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        state: LOGIN_STATE.SUCCESS,
      };
    case ACTION_TYPES.LOGIN_ERROR:
      return {
        ...state,
        state: LOGIN_STATE.ERROR,
      };
    case ACTION_TYPES.LOGIN_TIMEOUT:
      return {
        ...state,
        state: LOGIN_STATE.TIMEOUT,
      };
    default:
      return state;
  }
});
