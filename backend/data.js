import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Pindo",
      email: "pindo@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Sabianto",
      email: "sabianto@gmail.com",
      password: bcrypt.hashSync("4321", 8),
      isAdmin: true,
    },
  ],
  dataprogramstudi: [
    {
      kode: "62401",
      programstudi: "D3 Akuntansi",
    },
    {
      kode: "15401",
      programstudi: "D3 Kebidanan",
    },
    {
      kode: "57401",
      programstudi: "D3 Manajemen Informatika",
    },
    {
      kode: "61406",
      programstudi: "D3 Manajemen Keuangan",
    },
    {
      kode: "61404",
      programstudi: "D3 Manajemen Pemasaran",
    },
    {
      kode: "56401",
      programstudi: "D3 Teknik Komputer",
    },
  ],
  daftarkegiatan: [
    {
      tahunkegiatan: "sadfsd",
      kategori: "asdfsa",
      kepesertaan: "asfdsa",
      namakegiatan: "fdasfdsa",
      jmlpt: "fdasfsad",
      capaian: "fdsafsda",
      tglmulai: "",
      tglakhir: "",
      sertifpiala: "anything",
      url: "anything",
      foto: "asdfds",
      surattgs: "fdsfsda",
    },
  ],
  datamahasiswa: [
    {
      no: "",
      npm: "",
      nama: "",
      programstudi: "",
      thn_angkatan: "",
    },
  ],
};
export default data;
