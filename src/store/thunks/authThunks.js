import api, { setAuthToken } from "../../api/axios";
import { setUser } from "../actions/clientActions";

export const loginUser = (loginData) => {
  return async (dispatch) => {
    const response = await api.post("/login", {
      email: loginData.email,
      password: loginData.password,
    });

    const user = response.data;
    const token = response.data.token;

    dispatch(setUser(user));
    setAuthToken(token);

    if (loginData.rememberMe) {
      localStorage.setItem("token", token);
    }

    return user;
  };
};

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      setAuthToken(token);

      const response = await api.get("/verify");

      dispatch(setUser(response.data));

      localStorage.setItem("token", token);
      setAuthToken(token);
    } catch (error) {
      localStorage.removeItem("token");
      setAuthToken(null);
      dispatch(setUser({}));
    }
  };
};