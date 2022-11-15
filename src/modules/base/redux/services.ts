import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
const DEFAULT_TIME_OUT = 10 * 1000; //minisecond
const defaults = {
  headers: {
    "Content-Type": "application/json",
  },
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
  timeout: DEFAULT_TIME_OUT,
};

const forceLogout = () => {};

const api = (method: any, url: any, variables: any) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method,
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    })
      .then((response) => {
        if (response && response.status === STATUS_CODE.AUTHENTICATE) {
          forceLogout();
        }
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          if (error.response.status === STATUS_CODE.AUTHENTICATE) {
            forceLogout();
          }
          reject(error);
        } else {
          reject(defaults.error);
        }
      });
  });
};

export const STATUS_CODE = {
  AUTHENTICATE: 401,
  NOT_FOUND: 404,
};

export const initApi = (token: any) => {
  axios.defaults.headers.common["Authorization"] = `${token}`;
};

export const Api = {
  get: (url: any, variables: any): Promise<any> => api("get", url, variables),
  post: (url: any, variables?: any): Promise<any> =>
    api("post", url, variables),
  put: (url: any, variables: any): Promise<any> => api("put", url, variables),
  patch: (url: any, variables: any): Promise<any> =>
    api("patch", url, variables),
  delete: (url: any, variables: any): Promise<any> =>
    api("delete", url, variables),
};
