import mongoose from "mongoose";

const mahasiswaSchema = new mongoose.Schema({
  nama: { type: String },
  npm: { type: Number },
  programstudi: { type: mongoose.Schema.Types.ObjectId, ref: "Studi" },
  angkatan: { type: Number },
});
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

export default Mahasiswa;
