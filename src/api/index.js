import axios from "axios";

const endPoint = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const get = async (url, option) => {
  try {
    return (await endPoint.get(url, { params: option })).data;
  } catch (error) {
    console.log(error.message);
  }
};

export const post = async (url, option) => {
  try {
    return (await endPoint.post(url, option)).data;
  } catch (error) {
    console.log(error.message);
  }
};
