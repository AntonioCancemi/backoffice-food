import {
  CLEAR_CATEGORY,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCES,
} from "../actions/CategoryFetch";

const initialState = {
  loadingC: null,
  category: null,
  errorC: null,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return { ...state, loadingC: true };
    case FETCH_CATEGORY_SUCCES:
      return { ...state, category: action.payload, loadingC: false };
    case FETCH_CATEGORY_ERROR:
      return { ...state, errorC: action.payload, loadingC: false };
    case CLEAR_CATEGORY:
      return { loadingC: null, category: null, errorC: null };
    default:
      return state;
  }
};
export default categoryReducer;
