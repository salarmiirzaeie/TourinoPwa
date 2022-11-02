import axios from "axios";
const apiPort = "http://localhost:3333/";
export const getIndex = () => {
  const res = axios
    .get(`${apiPort}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};
