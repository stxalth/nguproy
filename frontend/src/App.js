import React from "react";
import Sidebar from "./Components/Sidebar";
import dashboard from "./screen/dashboard";
import DaftarProgramstudi from "./screen/DaftarProgramstudi";
import DaftarKegiatan from "./screen/DaftarKegiatan";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SigninScreen from "./screen/SigninScreen";
import { useDispatch } from "react-redux";
import { signout } from "./Actions/userActions";
import InputDataKegiatan from "./screen/InputDataKegiatan";
// import InputDataKegiatan from "./screen/InputDataKegiatan";

function App() {
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
            <Link to="/" onClick={signoutHandler} className="material-icons">
              power_settings_new
            </Link>
          </div>
          {/* <button>
            <Link to="/InputData" onClick={InputData}>
              Input Data
            </Link>
          </button> */}
        </header>

        <main>
          <Sidebar />
          <Route path="/dashboard" component={dashboard} />
          <Route path="/" exact={true} component={SigninScreen} />
          <Route
            path="/DaftarProgramstudi"
            exact={true}
            component={DaftarProgramstudi}
          />
          <Route
            path="/DaftarKegiatan"
            exact={true}
            component={DaftarKegiatan}
          />
          <Route
            path="/InputDataKegiatan"
            exact={true}
            component={InputDataKegiatan}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
