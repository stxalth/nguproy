import {
  KEGIATAN_CREATE_FAIL,
  KEGIATAN_CREATE_REQUEST,
  KEGIATAN_CREATE_RESET,
  KEGIATAN_CREATE_SUCCESS,
  KEGIATAN_DELETE_FAIL,
  KEGIATAN_DELETE_REQUEST,
  KEGIATAN_DELETE_RESET,
  KEGIATAN_DELETE_SUCCESS,
  KEGIATAN_LIST_FAIL,
  KEGIATAN_LIST_REQUEST,
  KEGIATAN_LIST_SUCCESS,
  KEGIATAN_DETAILS_REQUEST,
  KEGIATAN_DETAILS_SUCCESS,
  KEGIATAN_DETAILS_FAIL,
  KEGIATAN_UPDATE_REQUEST,
  KEGIATAN_UPDATE_SUCCESS,
  KEGIATAN_UPDATE_FAIL,
  KEGIATAN_UPDATE_RESET,
} from "../constants/daftarkegiatanConstants";

export const kegiatanListReducer = (
  state = { loading: true, daftarkegiatan: [] },
  action
) => {
  switch (action.type) {
    case KEGIATAN_LIST_REQUEST:
      return { loading: true };
    case KEGIATAN_LIST_SUCCESS:
      return { loading: false, gunadarma: action.payload };
    case KEGIATAN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const kegiatanDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case KEGIATAN_DETAILS_REQUEST:
      return { loading: true };
    case KEGIATAN_DETAILS_SUCCESS:
      return { loading: false, kegiatan: action.payload };
    case KEGIATAN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const kegiatanCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case KEGIATAN_CREATE_REQUEST:
      return { loading: true };
    case KEGIATAN_CREATE_SUCCESS:
      return { loading: false, success: true, kegiatan: action.payload };
    case KEGIATAN_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case KEGIATAN_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const kegiatanUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case KEGIATAN_UPDATE_REQUEST:
      return { loading: true };
    case KEGIATAN_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case KEGIATAN_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case KEGIATAN_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const kegiatanDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case KEGIATAN_DELETE_REQUEST:
      return { loading: true };
    case KEGIATAN_DELETE_SUCCESS:
      return { loading: false, success: true };
    case KEGIATAN_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case KEGIATAN_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
