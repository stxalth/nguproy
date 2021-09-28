import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMahasiswa,
  deleteMahasiswa,
  listMahasiswa,
} from "../Actions/mahasiswaActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";
import {
  MAHASISWA_CREATE_RESET,
  MAHASISWA_DELETE_RESET,
} from "../constants/mahasiswaConstants";

export default function DataMahasiswa(props) {
  const dispatch = useDispatch();
  const mahasiswaList = useSelector((state) => state.mahasiswaList);
  const { loading, error, gunadarma } = mahasiswaList;

  const mahasiswaCreate = useSelector((state) => state.mahasiswaCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    mahasiswa: createdMahasiswa,
  } = mahasiswaCreate;

  const mahasiswaDelete = useSelector((state) => state.mahasiswaDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = mahasiswaDelete;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: MAHASISWA_CREATE_RESET });
      props.history.push(`/datamahasiswa/${createdMahasiswa._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: MAHASISWA_DELETE_RESET });
    }
    dispatch(listMahasiswa());
  }, [createdMahasiswa, dispatch, props.history, successCreate, successDelete]);
  const deleteHandler = (mahasiswa) => {
    if (window.confirm("Yakin ingin menghapus?")) {
      dispatch(deleteMahasiswa(mahasiswa._id));
    }
  };

  const createHandler = () => {
    dispatch(createMahasiswa());
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
          <h1 className="judultabel">Data Mahasiswa</h1>
          <button className="tombolinput" onClick={createHandler}>
            Input Data
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>NPM</th>
                <th>Nama</th>
                <th>Program Studi</th>
                <th>Angkatan</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {gunadarma.map((mahasiswa) => (
                <tr key={mahasiswa.npm}>
                  <td>{mahasiswa.npm}</td>
                  <td>{mahasiswa.nama}</td>
                  <td>{mahasiswa.programstudi}</td>
                  <td>{mahasiswa.angkatan}</td>
                  <td>
                    <div className="buttonaksi">
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() =>
                          props.history.push(
                            `/datamahasiswa/${mahasiswa._id}/edit`
                          )
                        }
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() => deleteHandler(mahasiswa)}
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
