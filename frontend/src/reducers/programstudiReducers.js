import {
  STUDI_CREATE_FAIL,
  STUDI_CREATE_REQUEST,
  STUDI_CREATE_RESET,
  STUDI_CREATE_SUCCESS,
  STUDI_DELETE_FAIL,
  STUDI_DELETE_REQUEST,
  STUDI_DELETE_RESET,
  STUDI_DELETE_SUCCESS,
  STUDI_DETAILS_FAIL,
  STUDI_DETAILS_REQUEST,
  STUDI_DETAILS_SUCCESS,
  STUDI_LIST_FAIL,
  STUDI_LIST_REQUEST,
  STUDI_LIST_SUCCESS,
  STUDI_UPDATE_FAIL,
  STUDI_UPDATE_REQUEST,
  STUDI_UPDATE_RESET,
  STUDI_UPDATE_SUCCESS,
} from "../constants/dataprogramstudiConstants";

export const studiListReducer = (
  state = { loading: true, dataprogramstudi: [] },
  action
) => {
  switch (action.type) {
    case STUDI_LIST_REQUEST:
      return { loading: true };
    case STUDI_LIST_SUCCESS:
      return { loading: false, dataprogramstudi: action.payload };
    case STUDI_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studiDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case STUDI_DETAILS_REQUEST:
      return { loading: true };
    case STUDI_DETAILS_SUCCESS:
      return { loading: false, studi: action.payload };
    case STUDI_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studiCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDI_CREATE_REQUEST:
      return { loading: true };
    case STUDI_CREATE_SUCCESS:
      return { loading: false, success: true, studi: action.payload };
    case STUDI_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case STUDI_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const studiUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDI_UPDATE_REQUEST:
      return { loading: true };
    case STUDI_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case STUDI_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case STUDI_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const studiDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDI_DELETE_REQUEST:
      return { loading: true };
    case STUDI_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STUDI_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case STUDI_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
