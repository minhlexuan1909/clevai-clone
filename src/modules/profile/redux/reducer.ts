import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";
import { GET_INFO_STATE } from "../utils/constants";

const initState = {
  data: {
    parent: null,
    student_id: null,
    amount_of_chestnut: null,
    amount_of_star: null,
    amount_of_xp: null,
    default_grade_subject: {
      id: null,
      username: null,
      fullname: null,
      phone: null,
      notes: null,
      status: "",
      is_suspended: null,
      suspended_at: null,
      student_id: null,
      grade_id: null,
      grade_name: "",
      grade_original_name: "",
      subject_id: null,
      subject_name: "",
      subject_img_url: "",
      is_default: 1,
      package_info: null,
      class_info: {},
      class_student_info: null,
      start_date: null,
      end_date: null,
      sustenance_start_date: null,
      sustenance_end_date: null,
    },
    first_start_date: null,
  },
  state: "",
};

ReducerRegistry.register("profile", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ACTION_TYPES.GET_INFO_CALLING:
      return {
        ...state,
        state: GET_INFO_STATE.CALLING,
      };
    case ACTION_TYPES.GET_INFO_SUCCESS:
      return {
        ...state,
        state: GET_INFO_STATE.SUCCESS,
      };
    case ACTION_TYPES.GET_INFO_ERROR:
      return {
        ...state,
        state: GET_INFO_STATE.ERROR,
      };
    default:
      return state;
  }
});
