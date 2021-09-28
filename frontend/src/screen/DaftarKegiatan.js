import React, { useEffect } from "react";
import Search from "../Components/Search";
import MessageBox from "../Components/MessageBox";
import LoadingBox from "../Components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import {
  listKegiatan,
  deleteKegiatan,
  createKegiatan,
} from "../Actions/daftarkegiatanActions";
import {
  KEGIATAN_CREATE_RESET,
  KEGIATAN_DELETE_RESET,
} from "../constants/daftarkegiatanConstants";
import Sidebar from "../Components/Sidebar";

export default function DaftarKegiatan(props) {
  const dispatch = useDispatch();

  const kegiatanList = useSelector((state) => state.kegiatanList);
  const { loading, error, gunadarma } = kegiatanList;

  const kegiatanCreate = useSelector((state) => state.kegiatanCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    kegiatan: createdKegiatan,
  } = kegiatanCreate;

  const kegiatanDelete = useSelector((state) => state.kegiatanDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = kegiatanDelete;
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: KEGIATAN_CREATE_RESET });
      props.history.push(`/daftarkegiatan/${createdKegiatan._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: KEGIATAN_DELETE_RESET });
    }
    dispatch(listKegiatan());
  }, [createdKegiatan, dispatch, props.history, successCreate, successDelete]);
  const deleteHandler = (kegiatan) => {
    if (window.confirm("Yakin ingin menghapus?")) {
      dispatch(deleteKegiatan(kegiatan._id));
    }
  };

  const createHandler = () => {
    dispatch(createKegiatan());
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
          <h1 className="judultabel">Daftar Kegiatan</h1>
          <button className="tombolinput" onClick={createHandler}>
            Input Data
          </button>
          <Search />

          <table className="table">
            <thead>
              <tr>
                <th>Aksi</th>
                <th>Tahun Kegiatan</th>
                <th>Kategori</th>
                <th>Kepesertaan</th>
                <th>Nama Kegiatan</th>
                <th>Jumlah Perguruan Tinggi</th>
                <th>Capaian</th>
                <th>Tanggal Mulai</th>
                <th>Tanggal Akhir</th>
                <th>Sertifikat/Piala</th>
                <th>URL</th>
                <th>Foto</th>
                <th>Surat Tugas</th>
                <th>NPM</th>
                <th>Nama</th>
                <th>Program Studi</th>
                <th>Angkatan</th>
              </tr>
            </thead>

            <tbody>
              {gunadarma.map((kegiatan) => (
                <tr key={kegiatan._id}>
                  <td>
                    <div className="buttonaksi">
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() =>
                          props.history.push(
                            `/daftarkegiatan/${kegiatan._id}/edit`
                          )
                        }
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() => deleteHandler(kegiatan)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                  <td>{kegiatan.tahunkegiatan}</td>
                  <td>{kegiatan.kategori}</td>
                  <td>{kegiatan.kepesertaan}</td>
                  <td>{kegiatan.namakegiatan}</td>
                  <td>{kegiatan.jmlpt}</td>
                  <td>{kegiatan.capaian}</td>
                  <td>{kegiatan.tglmulai.substr(0, 12)}</td>
                  <td>{kegiatan.tglakhir.substr(0, 12)}</td>
                  <td>{kegiatan.sertifpiala}</td>
                  <td>{kegiatan.url}</td>
                  <td>
                    <a href={kegiatan.foto}>{kegiatan.foto}</a>
                  </td>
                  <td>{kegiatan.surattgs}</td>
                  <td>{kegiatan.npm}</td>
                  <td>{kegiatan.nama}</td>
                  <td>{kegiatan.programstudi}</td>
                  <td>{kegiatan.angkatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
