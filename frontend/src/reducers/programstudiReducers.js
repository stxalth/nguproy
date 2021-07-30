import {
  PROGRAM_LIST_FAIL,
  PROGRAM_LIST_REQUEST,
  PROGRAM_LIST_SUCCESS,
} from "../constants/dataprogramstudiConstants";

export const programstudiListReducer = (
  state = { loading: true, dataprogramstudi: [] },
  action
) => {
  switch (action.type) {
    case PROGRAM_LIST_REQUEST:
      return { loading: true };
    case PROGRAM_LIST_SUCCESS:
      return { loading: false, dataprogramstudi: action.payload };
    case PROGRAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
