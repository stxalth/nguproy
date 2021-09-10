import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsKegiatan,
  updateKegiatan,
} from "../Actions/daftarkegiatanActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { KEGIATAN_UPDATE_RESET } from "../constants/daftarkegiatanConstants";

export default function KegiatanEditScreen(props) {
  const kegiatanId = props.match.params.id;
  const [tahunkegiatan, setTahunkegiatan] = useState("");
  const [kategori, setKategori] = useState("");
  const [kepesertaan, setKepesertaan] = useState("");
  const [namakegiatan, setNamakegiatan] = useState("");
  const [jmlpt, setJmlpt] = useState("");
  const [capaian, setCapaian] = useState("");
  const [tglmulai, setTglmulai] = useState("");
  const [tglakhir, setTglakhir] = useState("");
  const [sertifpiala, setSertifpiala] = useState("");
  const [url, setUrl] = useState("");
  const [foto, setFoto] = useState("");
  const [surattgs, setSurattgs] = useState("");

  const dispatch = useDispatch();
  const kegiatanDetails = useSelector((state) => state.kegiatanDetails);
  const { loading, error, kegiatan } = kegiatanDetails;

  const kegiatanUpdate = useSelector((state) => state.kegiatanUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = kegiatanUpdate;

  useEffect(() => {
    if (successUpdate) {
      props.history.push("/daftarkegiatan");
    }
    if (!kegiatan || kegiatan._id !== kegiatanId || successUpdate) {
      dispatch({ type: KEGIATAN_UPDATE_RESET });
      dispatch(detailsKegiatan(kegiatanId));
    } else {
      setTahunkegiatan(kegiatan.tahunkegiatan);
      setKategori(kegiatan.kategori);
      setKepesertaan(kegiatan.kepesertaan);
      setNamakegiatan(kegiatan.namakegiatan);
      setJmlpt(kegiatan.jmlpt);
      setCapaian(kegiatan.capaian);
      setTglmulai(kegiatan.tglmulai);
      setTglakhir(kegiatan.tglakhir);
      setSertifpiala(kegiatan.sertifpiala);
      setUrl(kegiatan.url);
      setFoto(kegiatan.foto);
      setSurattgs(kegiatan.surattgs);
    }
  }, [kegiatan, dispatch, kegiatanId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update
    dispatch(
      updateKegiatan({
        _id: kegiatanId,
        tahunkegiatan,
        kategori,
        kepesertaan,
        namakegiatan,
        jmlpt,
        capaian,
        tglmulai,
        tglakhir,
        sertifpiala,
        url,
        foto,
        surattgs,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const foto = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("foto", foto);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setFoto(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Data {kegiatanId}</h1>
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
              <label htmlFor="tahun">Tahun Kegiatan</label>
              <input
                id="tahun"
                type="text"
                placeholder="Masukkan Tahun"
                value={tahunkegiatan}
                onChange={(e) => setTahunkegiatan(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="kategori">Kategori</label>
              <input
                id="kategori"
                type="text"
                placeholder="Masukkan Kategori"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="kepesertaan">Kepesertaan</label>
              <input
                id="kepesertaan"
                type="text"
                placeholder="Masukkan Kepesertaan"
                value={kepesertaan}
                onChange={(e) => setKepesertaan(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="namakegiatan">Nama Kegiatan</label>
              <input
                id="namakegiatan"
                type="text"
                placeholder="Masukkan Nama Kegiatan"
                value={namakegiatan}
                onChange={(e) => setNamakegiatan(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="jmlpt">Jumlah Perguruan Tinggi</label>
              <input
                id="jmlpt"
                type="text"
                placeholder="Masukkan Jumlah Perguruan Tinggi"
                value={jmlpt}
                onChange={(e) => setJmlpt(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="capaian">Capaian</label>
              <input
                id="capaian"
                type="text"
                placeholder="Masukkan Capaian"
                value={capaian}
                onChange={(e) => setCapaian(e.target.value)}
              ></input>
            </div>

            {/* the change for the date data starts here */}
            <div>
              <label htmlFor="tglmulai">Tanggal Mulai</label>
              <input
                type="text"
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                onBlur={(e) => {
                  e.currentTarget.type = "text";
                  e.currentTarget.blur();
                }}
                placeholder={tglmulai.substr(0, 12)}
                onChange={(e) => setTglmulai(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="tglakhir">Tanggal Akhir</label>
              <input
                type="text"
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                onBlur={(e) => {
                  e.currentTarget.type = "text";
                  e.currentTarget.blur();
                }}
                placeholder={tglakhir.substr(0, 12)}
                onChange={(e) => setTglakhir(e.target.value)}
              ></input>
            </div>
            {/* to here */}

            {/* For the image data, only show it in the table as a clickable link to that image */}
            <div>
              <label htmlFor="sertifpiala">Sertifikat/Piala</label>
              <input
                id="sertifpiala"
                type="text"
                placeholder="Masukkan Sertifikat/Piala"
                value={sertifpiala}
                onChange={(e) => setSertifpiala(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="url">URL</label>
              <input
                id="url"
                type="text"
                placeholder="Masukkan URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="foto">Foto</label>
              <input
                id="foto"
                type="text"
                placeholder="Masukkan Foto"
                value={foto}
              ></input>
              <input
                type="file"
                id="imageFile"
                label="Pilih Gambar"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && <MessageBox variant="danger">{error}</MessageBox>}
            </div>

            {/* For the image data, only show it in the table as a clickable link to that image */}

            {/* For the image data, only show it in the table as a clickable link to that image */}
            <div>
              <label htmlFor="surattgs">Surat Tugas</label>
              <input
                id="surattgs"
                type="text"
                placeholder="Masukkan Surat Tugas"
                value={surattgs}
                onChange={(e) => setSurattgs(e.target.value)}
              ></input>
            </div>

            <div>
              <label></label>
              <button className="login" type="submit">
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
