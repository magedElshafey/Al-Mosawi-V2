import axios from "axios";

const lang = window.localStorage.getItem("lang")
  ? JSON.parse(window.localStorage.getItem("lang"))
  : "ar";
const client = axios.create({
  baseURL: "https://almosawi.admin.technomasrsystems.com/api",
  headers: {
    "Content-Type": "application/json",
    lang,
  },
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    console.log(response);
    return response;
  };
  const onError = (error) => {
    console.log(error);
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
