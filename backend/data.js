import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      email: "pindo@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      email: "sabianto@gmail.com",
      password: bcrypt.hashSync("4321", 8),
      isAdmin: true,
    },
  ],
  dataprogramstudi: [
    {
      no: "1",
      kode: "62401",
      programstudi: "D3 Akuntansi",
    },
    {
      no: "2",
      kode: "15401",
      programstudi: "D3 Kebidanan",
    },
    {
      no: "3",
      kode: "57401",
      programstudi: "D3 Manajemen Informatika",
    },
    {
      no: "4",
      kode: "61406",
      programstudi: "D3 Manajemen Keuangan",
    },
    {
      no: "5",
      kode: "61404",
      programstudi: "D3 Manajemen Pemasaran",
    },
    {
      no: "6",
      kode: "56401",
      programstudi: "D3 Teknik Komputer",
    },
  ],
  daftarkegiatan: [
    {
      no: "2",
      tahunkegiatan: "sadfsd",
      kategori: "asdfsa",
      kepesertaan: "asfdsa",
      namakegiatan: "fdasfdsa",
      jmlpt: "fdasfsad",
      capaian: "fdsafsda",
      tglmulai: "22-feb-2020",
      tglakhir: "01-mar-2020",
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
