import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { deleteKegiatan } from "./Actions/daftarkegiatanActions";
import {
  kegiatanCreateReducer,
  kegiatanListReducer,
} from "./reducers/kegiatanReducers";
import { userSigninReducer } from "./reducers/userReducers";

const initialState = {};
const reducer = combineReducers({
  kegiatanList: kegiatanListReducer,
  userSignin: userSigninReducer,
  deleteKegiatan: deleteKegiatan,
  kegiatanCreate: kegiatanCreateReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
