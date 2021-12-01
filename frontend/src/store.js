import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  studiCreateReducer,
  studiDeleteReducer,
  studiDetailsReducer,
  studiListDropwdownReducer,
  studiListReducer,
  studiUpdateReducer,
} from "./reducers/programstudiReducers";
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
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  mahasiswaCreateReducer,
  mahasiswaDeleteReducer,
  mahasiswaDetailsReducer,
  mahasiswaListReducer,
  mahasiswaUpdateReducer,
} from "./reducers/mahasiswaReducers";

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
  mahasiswaList: mahasiswaListReducer,
  mahasiswaCreate: mahasiswaCreateReducer,
  mahasiswaDetails: mahasiswaDetailsReducer,
  mahasiswaDelete: mahasiswaDeleteReducer,
  mahasiswaUpdate: mahasiswaUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  studiList: studiListReducer,
  studiListDropdown: studiListDropwdownReducer,
  studiCreate: studiCreateReducer,
  studiDelete: studiDeleteReducer,
  studiDetails: studiDetailsReducer,
  studiUpdate: studiUpdateReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
