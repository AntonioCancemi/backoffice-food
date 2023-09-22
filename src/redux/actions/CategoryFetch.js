import { getAllCategories } from "../../axios/service/ServiceCategory";

export const FETCH_CATEGORY_REQUEST = "FETCH_CATEGORY_REQUEST";
export const FETCH_CATEGORY_SUCCES = "FETCH_CATEGORY_SUCCES";
export const FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR";
export const CLEAR_CATEGORY = "CLEAR_CATEGORY";
export const fetchCategory = (accessToken) => {
  const config = { headers: { Authorization: "Bearer " + accessToken } };

  return (dispatch) => {
    console.log("load fetch fetchCategory");
    //Start Request
    dispatch({ type: FETCH_CATEGORY_REQUEST });
    //Loading Request
    getAllCategories(config)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_CATEGORY_SUCCES,
          payload: data,
        });
      })
      // catching error and stop loading NO CONTENT
      .catch((error) => {
        dispatch({
          type: FETCH_CATEGORY_ERROR,
          payload: error.message,
        });
      });
  };
};
export const clear = () => {
  return { type: CLEAR_CATEGORY };
};
