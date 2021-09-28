import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsStudi, updateStudi } from "../Actions/programstudiActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";
import { STUDI_UPDATE_RESET } from "../constants/dataprogramstudiConstants";

export default function StudiEditScreen(props) {
  const studiId = props.match.params.id;
  const [kode, setKode] = useState("");
  const [programstudi, setProgramstudi] = useState("");

  const studiDetails = useSelector((state) => state.studiDetails);
  const { loading, error, studi } = studiDetails;

  const studiUpdate = useSelector((state) => state.studiUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = studiUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/daftarprogramstudi");
    }
    if (!studi || studi._id !== studiId || successUpdate) {
      dispatch({ type: STUDI_UPDATE_RESET });
      dispatch(detailsStudi(studiId));
    } else {
      setKode(studi.kode);
      setProgramstudi(studi.programstudi);
    }
  }, [dispatch, studi, studiId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update
    dispatch(
      updateStudi({
        _id: studiId,
        kode,
        programstudi,
      })
    );
  };
  return (
    <div>
      <Sidebar />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Program Studi</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{error}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="kode">Kode</label>
              <input
                id="kode"
                type="text"
                placeholder="Masukkan Kode"
                value={kode}
                onChange={(e) => {
                  setKode(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="text">Program Studi</label>
              <input
                id="text"
                type="text"
                placeholder="Masukkan Program Studi"
                value={programstudi}
                onChange={(e) => {
                  setProgramstudi(e.target.value);
                }}
              ></input>
            </div>

            <div>
              <label />
              <button type="submit" className="login">
                update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
