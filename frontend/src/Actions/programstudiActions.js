import Axios from "axios";
import {
  STUDI_CREATE_FAIL,
  STUDI_CREATE_REQUEST,
  STUDI_CREATE_SUCCESS,
  STUDI_DELETE_FAIL,
  STUDI_DELETE_REQUEST,
  STUDI_DELETE_SUCCESS,
  STUDI_DETAILS_FAIL,
  STUDI_DETAILS_REQUEST,
  STUDI_DETAILS_SUCCESS,
  STUDI_LIST_FAIL,
  STUDI_LIST_REQUEST,
  STUDI_LIST_SUCCESS,
  STUDI_UPDATE_FAIL,
  STUDI_UPDATE_REQUEST,
  STUDI_UPDATE_SUCCESS,
} from "../constants/dataprogramstudiConstants";

export const listStudi = () => async (dispatch) => {
  dispatch({
    type: STUDI_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/daftarprogramstudi");
    dispatch({ type: STUDI_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STUDI_LIST_FAIL, payload: error.message });
  }
};

export const detailsStudi = (studiId) => async (dispatch) => {
  dispatch({ type: STUDI_DETAILS_REQUEST, payload: studiId });
  try {
    const { data } = await Axios.get(`/api/daftarprogramstudi/${studiId}`);
    dispatch({ type: STUDI_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDI_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createStudi = () => async (dispatch, getState) => {
  dispatch({ type: STUDI_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/daftarprogramstudi",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: STUDI_CREATE_SUCCESS,
      payload: data.studi,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STUDI_CREATE_FAIL, payload: message });
  }
};

export const updateStudi = (studi) => async (dispatch, getState) => {
  dispatch({ type: STUDI_UPDATE_REQUEST, payload: studi });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/daftarprogramstudi/${studi._id}`,
      studi,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: STUDI_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STUDI_UPDATE_FAIL, error: message });
  }
};

export const deleteStudi = (studiId) => async (dispatch, getState) => {
  dispatch({ type: STUDI_DELETE_REQUEST, payload: studiId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/daftarprogramstudi/${studiId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: STUDI_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STUDI_DELETE_FAIL, payload: message });
  }
};
