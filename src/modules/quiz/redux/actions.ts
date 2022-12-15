import { ACTION_TYPES } from "./actionTypes";

export const setIsCompleteAnswer = (data: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_COMPLETE_ANSWER,
    data: data,
  };
};
export const setIsAnswered = (data: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_ANSWERED,
    data: data,
  };
};
export const setIsAnsweredCorrect = (data: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_ANSWERED_CORRECT,
    data: data,
  };
};
export const getQuizByLearningObjectId = (data: number) => {
  return {
    type: ACTION_TYPES.GET_QUIZ_BY_LEARNING_OBJECT_ID,
    data: data,
  };
};
export const updateQuizStatus = (data: object) => {
  return {
    type: ACTION_TYPES.UPDATE_QUIZ_STATUS,
    data: data,
  };
};
