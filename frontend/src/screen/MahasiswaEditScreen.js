import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsMahasiswa, updateMahasiswa } from "../Actions/mahasiswaActions";
import { dropdownStudi } from "../Actions/programstudiActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";

import { MAHASISWA_UPDATE_RESET } from "../constants/mahasiswaConstants";

export default function MahasiswaEditScreen(props) {
  const mahasiswaId = props.match.params.id;
  const [npm, setNpm] = useState("");
  const [nama, setNama] = useState("");
  const [programstudi, setProgramstudi] = useState("");
  const [angkatan, setAngkatan] = useState("");

  const studiListDropdown = useSelector((state) => state.studiListDropdown);
  const { daftarprogramstudi } = studiListDropdown;

  const mahasiswaDetails = useSelector((state) => state.mahasiswaDetails);
  const { loading, error, mahasiswa } = mahasiswaDetails;

  const mahasiswaUpdate = useSelector((state) => state.mahasiswaUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = mahasiswaUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dropdownStudi());
    return () => {
      //
    };
  }, [dispatch]);

  useEffect(() => {
    if (successUpdate) {
      props.history.push("/datamahasiswa");
    }
    if (!mahasiswa || mahasiswa._id !== mahasiswaId || successUpdate) {
      dispatch({ type: MAHASISWA_UPDATE_RESET });
      dispatch(detailsMahasiswa(mahasiswaId));
    } else {
      setNpm(mahasiswa.npm);
      setNama(mahasiswa.nama);
      setProgramstudi(mahasiswa.programstudi);
      setAngkatan(mahasiswa.angkatan);
    }
  }, [dispatch, mahasiswa, mahasiswaId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update
    dispatch(
      updateMahasiswa({
        _id: mahasiswaId,
        npm,
        nama,
        programstudi,
        angkatan,
      })
    );
  };
  return (
    <div>
      <Sidebar />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Data Mahasiswa</h1>
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
              <label htmlFor="npm">NPM</label>
              <input
                id="npm"
                type="text"
                placeholder="Masukkan NPM"
                value={npm}
                onChange={(e) => {
                  setNpm(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="nama">Nama</label>
              <input
                id="nama"
                type="text"
                placeholder="Masukkan Nama Mahasiswa"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
              ></input>
            </div>

            <div>
              <label htmlFor="programstudi">Program Studi</label>
              <select>
                <option selected disabled="true">
                  Pilih Program Studi
                </option>

                {daftarprogramstudi.map((studi) => (
                  <option
                    value={studi._id}
                    onChange={(e) => {
                      setProgramstudi(e.target.value);
                    }}
                  >
                    {studi.program}
                  </option>
                ))}
              </select>

              {/* <input
                id="programstudi"
                type="text"
                placeholder="Masukkan Program Studi"
                value={programstudi}
                onChange={(e) => {
                  setProgramstudi(e.target.value);
                }}
              ></input> */}
            </div>

            <div>
              <label htmlFor="angkatan">Angkatan</label>
              <input
                id="angkatan"
                type="text"
                placeholder="Masukkan Tahun Angkatan"
                value={angkatan}
                onChange={(e) => {
                  setAngkatan(e.target.value);
                }}
              ></input>
            </div>

            <div>
              <label></label>
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
