import Axios from "axios";
import {
  PROGRAM_LIST_FAIL,
  PROGRAM_LIST_REQUEST,
  PROGRAM_LIST_SUCCESS,
} from "../constants/dataprogramstudiConstants";

export const listProgram = () => async (dispatch) => {
  dispatch({
    type: PROGRAM_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/dataprogramstudi");
    dispatch({ type: PROGRAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_FAIL, payload: error.message });
  }
};
