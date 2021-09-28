import mongoose from "mongoose";

const kegiatanSchema = new mongoose.Schema({
  tahunkegiatan: { type: Number },
  kategori: { type: String },
  kepesertaan: { type: String },
  namakegiatan: { type: String },
  jmlpt: { type: Number },
  capaian: { type: String },
  tglmulai: { type: String },
  tglakhir: { type: String },
  sertifpiala: { type: String },
  url: { type: String },
  foto: { type: String },
  surattgs: { type: String },
  npm: { type: Number },
  nama: { type: String },
  programstudi: { type: String },
  angkatan: { type: Number },
});
const Kegiatan = mongoose.model("Kegiatan", kegiatanSchema);

export default Kegiatan;
