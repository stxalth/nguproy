import mongoose from "mongoose";

const kegiatanSchema = new mongoose.Schema({
  tahunkegiatan: { type: String },
  kategori: { type: String },
  kepesertaan: { type: String },
  namakegiatan: { type: String },
  jumlahpt: { type: Number },
  capaian: { type: String },
  tglmulai: { type: Date },
  tglakhir: { type: Date },
  sertifpiala: { type: String },
  url: { type: String },
  foto: { type: String },
  surattgs: { type: String },
});
const Kegiatan = mongoose.model("Kegiatan", kegiatanSchema);

export default Kegiatan;
