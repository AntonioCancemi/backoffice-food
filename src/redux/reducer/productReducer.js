import {
  CLEAR_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCES,
} from "../actions/productsFetch";

const initialState = {
  loading: null,
  content: null,
  error: null,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCES:
      return { ...state, content: action.payload, loading: false };
    case FETCH_PRODUCT_ERROR:
      return { ...state, error: action.payload, loading: false };
    case CLEAR_PRODUCT:
      return { loading: null, content: null, error: null };
    default:
      return state;
  }
};
export default productReducer;
