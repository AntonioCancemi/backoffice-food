import { getUserData, loginPostDTO } from "../../axios/service/ServiceAuth";
import { CLEAR_PRODUCT } from "./productsFetch";

export const FETCH_AUTHDATA_REQUEST = "FETCH_AUTHDATA_REQUEST";
export const FETCH_AUTHDATA_SUCCES = "FETCH_AUTHDATA_SUCCES";
export const FETCH_AUTHDATA_ERROR = "FETCH_AUTHDATA_ERROR";
export const SET_USER_DATA = "SET_USER_DATA";
export const LOGOUT = "LOGOUT";
export const fetchAuthData = (userData) => {
  return (dispatch) => {
    console.log("load fetch fetchAuthData");
    // start
    dispatch({ type: FETCH_AUTHDATA_REQUEST });
    //Loading Request
    loginPostDTO(userData)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_AUTHDATA_SUCCES,
          payload: data,
        });
        sessionStorage.setItem("user", JSON.stringify(data));
      })
      // catching error and stop loading NO CONTENT
      .catch((error) => {
        dispatch({
          type: FETCH_AUTHDATA_ERROR,
          payload: error.message,
        });
      })
      .finally(() =>
        getUserData(userData?.username)
          .then((response) => response.data)
          .then((data) => {
            dispatch({ type: SET_USER_DATA, payload: data });
          })
      );
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT });
    dispatch({ type: LOGOUT });
    sessionStorage.clear();
  };
};
