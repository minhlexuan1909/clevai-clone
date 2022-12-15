import { ReducerRegistry, TAction } from "../../base";
import { GET_QUIZ_STATE, UPDATE_QUIZ_STATUS_STATE } from "../utils/constants";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  quiz: {
    id: 4,
    createBy: "admin",
    createDate: null,
    modifiedBy: "admin",
    modifiedDate: null,
    explanation: "<p>Không có lời giải đâu, tự túc là hạnh phúc</p>",
    expAmount: 20,
    quizQuestion: "<p> Nối </p>",
    progress: null,
    rate: false,
    answers: [
      {
        id: 11,
        createBy: "admin",
        createDate: null,
        modifiedBy: "admin",
        modifiedDate: null,
        content: "<p>Chó </p>",
        isRightOption: false,
        correctConnectContent: "<p>Gâu Gâu</p>",
        answerOrder: null,
        ansWerBlank: null,
      },
      {
        id: 12,
        createBy: "admin",
        createDate: null,
        modifiedBy: "admin",
        modifiedDate: null,
        content: "<p>Mèo </p>",
        isRightOption: false,
        correctConnectContent: "<p> Meo Meo </p>",
        answerOrder: null,
        ansWerBlank: null,
      },
      {
        id: 13,
        createBy: "admin",
        createDate: null,
        modifiedBy: "admin",
        modifiedDate: null,
        content: "<p>Lợn </p>",
        isRightOption: false,
        correctConnectContent: "<p> Ủn ỉn </p>",
        answerOrder: null,
        ansWerBlank: null,
      },
      {
        id: 14,
        createBy: "admin",
        createDate: null,
        modifiedBy: "admin",
        modifiedDate: null,
        content: "<p>Gà </p>",
        isRightOption: false,
        correctConnectContent: "<p> Cục tác </p>",
        answerOrder: null,
        ansWerBlank: null,
      },
    ],
  },
  quizType: {
    id: 1,
    name: "Multiple choice",
    hasBlank: null,
    hasOption: true,
    hasOrder: null,
    hasConnection: null,
  },
  isCompleteAnswer: false,
  isAnswered: false,
  isAnsweredCorrect: false,
  getQuizState: GET_QUIZ_STATE.DEFAULT,
  updateQuizStatusState: UPDATE_QUIZ_STATUS_STATE.DEFAULT,
};
ReducerRegistry.register("quiz", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_COMPLETE_ANSWER:
      return {
        ...state,
        isCompleteAnswer: action.data,
      };
    case ACTION_TYPES.SET_IS_ANSWERED:
      return {
        ...state,
        isAnswered: action.data,
      };
    case ACTION_TYPES.SET_IS_ANSWERED_CORRECT:
      return {
        ...state,
        isAnsweredCorrect: action.data,
      };
    case ACTION_TYPES.SET_QUIZ:
      return {
        ...state,
        quiz: action.data,
      };
    case ACTION_TYPES.SET_QUIZ_TYPE:
      return {
        ...state,
        quizType: action.data,
      };
    case ACTION_TYPES.SET_GET_QUIZ_STATE:
      return {
        ...state,
        getQuizState: action.data,
      };
    case ACTION_TYPES.SET_UPDATE_QUIZ_STATUS_STATE:
      return {
        ...state,
        updateQuizStatusState: action.data,
      };

    default:
      return state;
  }
});
