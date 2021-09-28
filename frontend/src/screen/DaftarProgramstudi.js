import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStudi,
  deleteStudi,
  listStudi,
} from "../Actions/programstudiActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";
import {
  STUDI_CREATE_RESET,
  STUDI_DELETE_RESET,
} from "../constants/dataprogramstudiConstants";

export default function DaftarProgramstudi(props) {
  const dispatch = useDispatch();
  const studiList = useSelector((state) => state.studiList);
  const { loading, error, gunadarma } = studiList;
  const studiCreate = useSelector((state) => state.studiCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    studi: createdStudi,
  } = studiCreate;

  const studiDelete = useSelector((state) => state.studiDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = studiDelete;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: STUDI_CREATE_RESET });
      props.history.push(`/daftarprogramstudi/${createdStudi._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: STUDI_DELETE_RESET });
    }
    dispatch(listStudi());
  }, [createdStudi, dispatch, props.history, successCreate, successDelete]);
  const deleteHandler = (studi) => {
    if (window.confirm("Yakin ingin menghapus?")) {
      dispatch(deleteStudi(studi._id));
    }
  };

  const createHandler = () => {
    dispatch(createStudi());
  };
  return (
    <div>
      <Sidebar />
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="container">
          <h1 className="judultabel">Daftar Program Studi</h1>
          <button className="tombolinput" onClick={createHandler}>
            Input Data
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Program Studi</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {gunadarma.map((studi) => (
                <tr key={studi.kode}>
                  <td>{studi.kode}</td>
                  <td>{studi.programstudi}</td>
                  <td>
                    <div className="buttonaksi">
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() =>
                          props.history.push(
                            `/daftarprogramstudi/${studi._id}/edit`
                          )
                        }
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() => deleteHandler(studi)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
