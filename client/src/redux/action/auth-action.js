import axios from "axios";
import {
  ERROR_USER,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../action-types/auth-action-types";

export const registerHandler = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      newUser
    );
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
    });
  }
};

export const loginHandler = (authUser, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      authUser
    );
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (error) {
    console.dir(error);
    const msg = error.response.data.msg;

    if (msg) {
      alert(msg);
    }

    dispatch({
      type: ERROR_USER,
    });
    history.push("/");
  }
};

export const logoutHandler = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_USER,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAuthUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("http://localhost:5000/api/auth/user", config);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
