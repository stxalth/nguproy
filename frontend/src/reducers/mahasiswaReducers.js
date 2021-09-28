import {
  MAHASISWA_CREATE_FAIL,
  MAHASISWA_CREATE_REQUEST,
  MAHASISWA_CREATE_RESET,
  MAHASISWA_CREATE_SUCCESS,
  MAHASISWA_DELETE_FAIL,
  MAHASISWA_DELETE_REQUEST,
  MAHASISWA_DELETE_RESET,
  MAHASISWA_DELETE_SUCCESS,
  MAHASISWA_LIST_FAIL,
  MAHASISWA_LIST_REQUEST,
  MAHASISWA_LIST_SUCCESS,
  MAHASISWA_DETAILS_REQUEST,
  MAHASISWA_DETAILS_SUCCESS,
  MAHASISWA_DETAILS_FAIL,
  MAHASISWA_UPDATE_REQUEST,
  MAHASISWA_UPDATE_SUCCESS,
  MAHASISWA_UPDATE_FAIL,
  MAHASISWA_UPDATE_RESET,
} from "../constants/mahasiswaConstants";

export const mahasiswaListReducer = (
  state = { loading: true, gunadarma: [] },
  action
) => {
  switch (action.type) {
    case MAHASISWA_LIST_REQUEST:
      return { loading: true };
    case MAHASISWA_LIST_SUCCESS:
      return { loading: false, gunadarma: action.payload };
    case MAHASISWA_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mahasiswaDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case MAHASISWA_DETAILS_REQUEST:
      return { loading: true };
    case MAHASISWA_DETAILS_SUCCESS:
      return { loading: false, mahasiswa: action.payload };
    case MAHASISWA_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mahasiswaCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MAHASISWA_CREATE_REQUEST:
      return { loading: true };
    case MAHASISWA_CREATE_SUCCESS:
      return { loading: false, success: true, mahasiswa: action.payload };
    case MAHASISWA_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case MAHASISWA_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const mahasiswaUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case MAHASISWA_UPDATE_REQUEST:
      return { loading: true };
    case MAHASISWA_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case MAHASISWA_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MAHASISWA_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const mahasiswaDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MAHASISWA_DELETE_REQUEST:
      return { loading: true };
    case MAHASISWA_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MAHASISWA_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case MAHASISWA_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
