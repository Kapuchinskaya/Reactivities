import axios, { Axios, AxiosResponse } from "axios";
import { Activity } from "../models/activity";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

//пока не получили ответ на запрос, можно вклиниться с помощью interceptors
//
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000); //sleep - это любая ф, которую мы пишем сами
    return response;
  } catch (err) {
    console.log(err);
    return await Promise.reject(err);
  }
});

//в основном, нам нужна только data из response объекта (к-й мы получаем из запроса)
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

//создаем основы для всех видов запросов
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => axios.post<void>("/activities", activity),
  update: (activity: Activity) =>
    axios.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => axios.delete<void>(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
