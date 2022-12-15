import { Api } from "../../base/redux/services";
const PORT = 8102;
const BASE_URL = `http://localhost:${PORT}`;

export const getQuizByLearningObjectIdApi = (id: number): Promise<any> => {
  return Api.get(BASE_URL + `/api/quiz/random?learningObjectId=${id}`, null);
};

export const updateQuizStatusApi = (quizId: number, hasDoneRight: boolean) => {
  return Api.put(BASE_URL + `/api/quiz/${quizId}`, {
    id: quizId,
    hasDoneRight,
  });
};
