import React from "react";
import dashboard from "./screen/dashboard";
import DaftarProgramstudi from "./screen/DaftarProgramstudi";
import DaftarKegiatan from "./screen/DaftarKegiatan";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SigninScreen from "./screen/SigninScreen";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./Actions/userActions";
import KegiatanEditScreen from "./screen/KegiatanEditScreen";
import RegisterScreen from "./screen/RegisterScreen";
import UserListScreen from "./screen/UserListScreen";
import AdminRoute from "./Components/AdminRoute";
import UserEditScreen from "./screen/UserEditScreen";
import DataMahasiswa from "./screen/DataMahasiswa";
import StudiEditScreen from "./screen/StudiEditScreen";
import MahasiswaEditScreen from "./screen/MahasiswaEditScreen";
import EditorRoute from "./Components/EditorRoute";
import unauthorized from "./Components/unauthorized";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/dashboard">
              Gunadarma
            </a>
          </div>
          <div className="profil">
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-angle-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      <i className="material-icons">logout</i> Keluar
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/"></Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-angle-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/userlist">
                      <i className="material-icons">account_box</i> Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      <i className="material-icons">logout</i> Keluar
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <main>
          <Route path="/" exact={true} component={SigninScreen} />
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/dashboard" component={dashboard} />
          <Route
            path="/daftarprogramstudi"
            exact={true}
            component={DaftarProgramstudi}
          />
          <Route path="/unathorized" component={unauthorized} />
          <Route
            path="/DaftarKegiatan"
            exact={true}
            component={DaftarKegiatan}
          />
          <Route path="/datamahasiswa" exact={true} component={DataMahasiswa} />
          <EditorRoute
            path="/daftarprogramstudi/:id/edit"
            exact
            component={StudiEditScreen}
          />
          <EditorRoute
            path="/datamahasiswa/:id/edit"
            exact
            component={MahasiswaEditScreen}
          />
          <EditorRoute
            path="/daftarkegiatan/:id/edit"
            component={KegiatanEditScreen}
            exact
          />
          <AdminRoute
            path="/userlist"
            exact={true}
            component={UserListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/users/:id/edit"
            component={UserEditScreen}
            exact
          ></AdminRoute>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
