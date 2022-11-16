import { Api, initApi } from "../../base/redux/services";
export const getUserInfo = (token: string): Promise<any> => {
  initApi(token);
  return Api.get(
    "https://cloud-gateway.clevai.edu.vn/api/v1/lms/student/info",
    null
  );
};
