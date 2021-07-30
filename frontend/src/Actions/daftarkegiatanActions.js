import Axios from "axios";
import {
  KEGIATAN_CREATE_FAIL,
  KEGIATAN_CREATE_REQUEST,
  KEGIATAN_CREATE_SUCCESS,
  KEGIATAN_DELETE_FAIL,
  KEGIATAN_DELETE_REQUEST,
  KEGIATAN_DELETE_SUCCESS,
  KEGIATAN_LIST_FAIL,
  KEGIATAN_LIST_REQUEST,
  KEGIATAN_LIST_SUCCESS,
} from "../constants/daftarkegiatanConstants";

export const listKegiatan = () => async (dispatch) => {
  dispatch({
    type: KEGIATAN_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/daftarkegiatan");
    dispatch({ type: KEGIATAN_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: KEGIATAN_LIST_FAIL, payload: error.message });
  }
};

export const createKegiatan = () => async (dispatch, getState) => {
  dispatch({ type: KEGIATAN_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/daftarkegiatan",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: KEGIATAN_CREATE_SUCCESS,
      payload: data.daftarkegiatan,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: KEGIATAN_CREATE_FAIL, payload: message });
  }
};

export const deleteKegiatan = (kegiatanId) => async (dispatch, getState) => {
  dispatch({ type: KEGIATAN_DELETE_REQUEST, payload: kegiatanId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete("/api/daftarkegiatan/" + kegiatanId, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: KEGIATAN_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: KEGIATAN_DELETE_FAIL, payload: message });
  }
};
