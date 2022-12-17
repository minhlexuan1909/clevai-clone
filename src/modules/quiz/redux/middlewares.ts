import { Store } from "redux";
import { MiddlewareRegistry, STATUS_CODE } from "src/modules/base";

import { GET_QUIZ_STATE, UPDATE_QUIZ_STATUS_STATE } from "../utils/constants";
import { ACTION_TYPES } from "./actionTypes";
import { getQuizByLearningObjectIdApi, updateQuizStatusApi } from "./services";

const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_QUIZ_BY_LEARNING_OBJECT_ID: {
        dispatch({
          type: ACTION_TYPES.SET_GET_QUIZ_STATE,
          data: GET_QUIZ_STATE.CALLING,
        });
        try {
          const getQuizByIdResponse = await getQuizByLearningObjectIdApi(
            action.data
          );
          dispatch({
            type: ACTION_TYPES.SET_GET_QUIZ_STATE,
            data: GET_QUIZ_STATE.SUCCESS,
          });
          dispatch({
            type: ACTION_TYPES.SET_QUIZ,
            data: getQuizByIdResponse.quiz,
          });
          dispatch({
            type: ACTION_TYPES.SET_QUIZ_TYPE,
            data: getQuizByIdResponse.quizType,
          });
          return;
        } catch (error: any) {
          if (error.status === STATUS_CODE.INTERNAL_ERROR) {
            return dispatch({
              type: ACTION_TYPES.SET_GET_QUIZ_STATE,
              data: GET_QUIZ_STATE.TIMEOUT,
            });
          }
          return dispatch({
            type: ACTION_TYPES.SET_GET_QUIZ_STATE,
            data: GET_QUIZ_STATE.ERROR,
          });
        }
      }
      case ACTION_TYPES.UPDATE_QUIZ_STATUS: {
        dispatch({
          type: ACTION_TYPES.SET_UPDATE_QUIZ_STATUS_STATE,
          data: UPDATE_QUIZ_STATUS_STATE.CALLING,
        });
        try {
          const { quizId, hasDoneRight } = action.data;
          await updateQuizStatusApi(quizId, hasDoneRight);
          return dispatch({
            type: ACTION_TYPES.SET_UPDATE_QUIZ_STATUS_STATE,
            data: UPDATE_QUIZ_STATUS_STATE.SUCCESS,
          });
        } catch (error: any) {
          if (error.status === STATUS_CODE.INTERNAL_ERROR) {
            return dispatch({
              type: ACTION_TYPES.SET_UPDATE_QUIZ_STATUS_STATE,
              data: UPDATE_QUIZ_STATUS_STATE.TIMEOUT,
            });
          }
          return dispatch({
            type: ACTION_TYPES.SET_UPDATE_QUIZ_STATUS_STATE,
            data: UPDATE_QUIZ_STATUS_STATE.ERROR,
          });
        }
      }
    }
  };

MiddlewareRegistry.register(middleware);
