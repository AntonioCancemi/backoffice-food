import {
  FETCH_AUTHDATA_ERROR,
  FETCH_AUTHDATA_REQUEST,
  FETCH_AUTHDATA_SUCCES,
  LOGOUT,
  SET_USER_DATA,
} from "../actions/authAction";

const initialState = {
  loading: null,
  auth: null,
  user: null,
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHDATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_AUTHDATA_SUCCES:
      return { ...state, auth: action.payload, loading: false };
    case FETCH_AUTHDATA_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_USER_DATA:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { loading: null, auth: null, user: null, error: null };
    default:
      return state;
  }
};
export default authReducer;
