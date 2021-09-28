import mongoose from "mongoose";

const mahasiswaSchema = new mongoose.Schema({
  nama: { type: String },
  npm: { type: Number },
  programstudi: { type: String },
  angkatan: { type: Number },
});
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

export default Mahasiswa;
