import Axios from "axios";
import {
  MAHASISWA_CREATE_FAIL,
  MAHASISWA_CREATE_REQUEST,
  MAHASISWA_CREATE_SUCCESS,
  MAHASISWA_DELETE_FAIL,
  MAHASISWA_DELETE_REQUEST,
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
} from "../constants/mahasiswaConstants";

export const listMahasiswa = () => async (dispatch) => {
  dispatch({
    type: MAHASISWA_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/datamahasiswa");
    dispatch({ type: MAHASISWA_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MAHASISWA_LIST_FAIL, payload: error.message });
  }
};

export const detailsMahasiswa = (mahasiswaId) => async (dispatch) => {
  dispatch({ type: MAHASISWA_DETAILS_REQUEST, payload: mahasiswaId });
  try {
    const { data } = await Axios.get(`/api/datamahasiswa/${mahasiswaId}`);
    dispatch({ type: MAHASISWA_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MAHASISWA_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createMahasiswa = () => async (dispatch, getState) => {
  dispatch({ type: MAHASISWA_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/datamahasiswa",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: MAHASISWA_CREATE_SUCCESS,
      payload: data.mahasiswa,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MAHASISWA_CREATE_FAIL, payload: message });
  }
};

export const updateMahasiswa = (mahasiswa) => async (dispatch, getState) => {
  dispatch({ type: MAHASISWA_UPDATE_REQUEST, payload: mahasiswa });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/datamahasiswa/${mahasiswa._id}`,
      mahasiswa,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: MAHASISWA_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MAHASISWA_UPDATE_FAIL, error: message });
  }
};

export const deleteMahasiswa = (mahasiswaId) => async (dispatch, getState) => {
  dispatch({ type: MAHASISWA_DELETE_REQUEST, payload: mahasiswaId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/datamahasiswa/${mahasiswaId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: MAHASISWA_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MAHASISWA_DELETE_FAIL, payload: message });
  }
};
