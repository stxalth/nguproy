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
import { KEGIATAN_CREATE_RESET } from "../constants/daftarkegiatanConstants";

export default function DaftarKegiatan(props) {
  const dispatch = useDispatch();
  const kegiatanList = useSelector((state) => state.kegiatanList);
  const { loading, error, daftarkegiatan } = kegiatanList;

  const kegiatanCreate = useSelector((state) => state.kegiatanCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    kegiatan: createdKegiatan,
  } = kegiatanCreate;
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: KEGIATAN_CREATE_RESET });
      props.history.push(`/daftarkegiatan/${createdKegiatan._id}/edit`);
    }
    dispatch(listKegiatan());
  }, [createdKegiatan, dispatch, props.history, successCreate]);
  const deleteHandler = (daftarkegiatan) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteKegiatan(daftarkegiatan._id));
    }
  };

  const createHandler = () => {
    dispatch(createKegiatan());
  };
  return (
    <div>
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
                <th>No.</th>
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
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {daftarkegiatan.map((daftarkegiatan) => (
                <tr key={daftarkegiatan._id}>
                  <td>{daftarkegiatan.no}</td>
                  <td>{daftarkegiatan.thnkegiatan}</td>
                  <td>{daftarkegiatan.kategori}</td>
                  <td>{daftarkegiatan.kepesertaan}</td>
                  <td>{daftarkegiatan.namakegiatan}</td>
                  <td>{daftarkegiatan.jmlpt}</td>
                  <td>{daftarkegiatan.capaian}</td>
                  <td>{daftarkegiatan.tglmulai.substring(0, 10)}</td>
                  <td>{daftarkegiatan.tglakhir.substring(0, 10)}</td>
                  <td>{daftarkegiatan.sertifpiala}</td>
                  <td>{daftarkegiatan.url}</td>
                  <td>{daftarkegiatan.foto}</td>
                  <td>{daftarkegiatan.surattgs}</td>
                  <td>
                    <div className="buttonaksi">
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() =>
                          props.hitory.push(
                            `/daftarkegiatan/${daftarkegiatan._id}/edit`
                          )
                        }
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() => deleteHandler(daftarkegiatan)}
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
