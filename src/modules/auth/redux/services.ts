import { Api } from "../../base/redux/services";
import { ILoginData } from "../types/login";
export const loginApi = (loginData: ILoginData): Promise<any> => {
  return Api.post(
    "https://cloud-gateway.clevai.edu.vn/api/v1/user/login/lms-web",
    loginData
  );
};
