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
export const unjoinTour = (data) => {
  const res = axios
    .put(`${apiPort}/unjoin-tour`, data, {
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
export const unSaveTour = (data) => {
  const res = axios
    .put(`${apiPort}/unsave-tour`, data, {
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
export const joineds = () => {
  const res = axios
    .get(`${apiPort}/joineds`, {
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
export const isJoined = (data) => {
  const res = axios
    .post(`${apiPort}/is-joined`, data, {
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
