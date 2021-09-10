import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { studiListReducer } from "./reducers/programstudiReducers";
import {
  kegiatanCreateReducer,
  kegiatanDeleteReducer,
  kegiatanDetailsReducer,
  kegiatanListReducer,
  kegiatanUpdateReducer,
} from "./reducers/kegiatanReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  kegiatanList: kegiatanListReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  kegiatanDelete: kegiatanDeleteReducer,
  kegiatanCreate: kegiatanCreateReducer,
  kegiatanUpdate: kegiatanUpdateReducer,
  kegiatanDetails: kegiatanDetailsReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userDetails: userDetailsReducer,
  studiList: studiListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
