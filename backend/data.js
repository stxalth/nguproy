import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Pindo",
      email: "pindo@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isEditor: true,
    },
    {
      name: "Sabianto",
      email: "sabianto@gmail.com",
      password: bcrypt.hashSync("4321", 8),
      isAdmin: true,
    },
  ],
  daftarprogramstudi: [
    {
      kode: "",
      programstudi: "",
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
      nama: "",
      npm: "",
      programstudi: "",
      angkatan: "",
    },
  ],
};
export default data;
