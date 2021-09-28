import mongoose from "mongoose";

const reqString = {
  type: String,
  required: true,
}
const reqNumber = {
  type: Number,
  required: true,
}

const studiSchema = mongoose.Schema(
  {
    kode: reqNumber,
    namaprodi: reqString,
  }
),

const mahasiswaSchema = mongoose.Schema(
  {
    nama: reqString,
    npm: reqNumber,
    programstudi: [studiSchema],
    angkatan: reqNumber,
  }
),

const kegiatanSchema = mongoose.Schema(
  {
  tahunkegiatan: reqNumber,
  kategori: reqString,
  kepesertaan: reqString,
  namakegiatan: reqString,
  jmlpt: reqNumber,
  capaian: reqString,
  tglmulai: reqString,
  tglakhir: reqString,
  sertifpiala: reqString,
  url: reqString,
  foto: reqString,
  surattgs: reqString,
  datamasiswa: [mahasiswaSchema],
  }
)

module.exports = mongoose.model("Coba", kegiatanSchema);