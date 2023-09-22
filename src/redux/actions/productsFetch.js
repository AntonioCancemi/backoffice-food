import { getAllProducts } from "../../axios/service/ServiceProduct";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCES = "FETCH_PRODUCT_SUCCES";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
export const CLEAR_PRODUCT = "CLEAR_PRODUCT";
export const fetchProducts = (accessToken) => {
  const config = { headers: { Authorization: "Bearer " + accessToken } };

  return (dispatch) => {
    console.log("load fetch fetchProducts");
    //Start Request
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    //Loading Request
    getAllProducts(config)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCT_SUCCES,
          payload: data,
        });
      })
      // catching error and stop loading NO CONTENT
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCT_ERROR,
          payload: error.message,
        });
      });
  };
};
export const clear = () => {
  return { type: CLEAR_PRODUCT };
};
