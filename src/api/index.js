import axios from "axios";

const sipApp = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getSip = async (url, options = {}) => {
  try {
    return await sipApp.get(url, { params: options });
  } catch (error) {
    alert(error.message);
  }
};

const postSip = async (url, options = {}) => {
  try {
    return await sipApp.post(url, options);
  } catch (error) {
    alert(error.message);
  }
};

const HR = axios.create({
  baseURL: "http://localhost:19335/api",
});

const getHR = async (url, options = {}) => {
  try {
    return await HR.get(url, { params: options });
  } catch (error) {
    alert(error.message);
  }
};

const postHR = async (url, options = {}) => {
  try {
    return await HR.post(url, options);
  } catch (error) {
    alert(error.message);
  }
};

export { getHR, postHR, getSip, postSip };
