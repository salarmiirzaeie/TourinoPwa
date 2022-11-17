import axios from "axios";
const apiPort = "http://localhost:3333/dashboard";
const token = localStorage.getItem("token");
export const joinTour = (data) => {
  const res = axios
    .put(`${apiPort}/join-tour`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};
export const saveTour = (data) => {
  const res = axios
    .put(`${apiPort}/save-tour`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};
export const saveds = () => {
  const res = axios
    .get(`${apiPort}/saveds`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};

export const isSaved = (data) => {
  const res = axios
    .post(`${apiPort}/is-saved`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};
