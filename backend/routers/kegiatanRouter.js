import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Kegiatan from "../models/kegiatanModel.js";
import { isAuth } from "../utils.js";

const kegiatanRouter = express.Router();

kegiatanRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const kegiatan = await Kegiatan.find({});
    res.send(kegiatan);
  })
);
kegiatanRouter.get("/:id", async (req, res) => {
  const kegiatan = await Kegiatan.findOne({ _id: req.params.id });
  if (kegiatan) {
    res.send(kegiatan);
  } else {
    res.status(404).send({ message: "Data not found" });
  }
});

kegiatanRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Kegiatan.remove({});
    const createdKegiatan = await Kegiatan.insertMany(data.daftarkegiatan);
    res.send({ createdKegiatan });
  })
);

kegiatanRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const kegiatan = new Kegiatan({
      tahunkegiatan: "",
      kategori: "",
      kepesertaan: "",
      namakegiatan: "",
      jmlpt: "",
      capaian: "",
      tglmulai: "",
      tglakhir: "",
      sertifpiala: "",
      url: "",
      foto: "",
      surattgs: "",
      npm: "",
      nama: "",
      programstudi: "",
      angkatan: "",
    });
    const createdKegiatan = await kegiatan.save();
    res.send({ message: "Data telah dibuat", kegiatan: createdKegiatan });
  })
);

kegiatanRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const kegiatanId = req.params.id;
    const kegiatan = await Kegiatan.findByIdAndUpdate(kegiatanId);
    if (kegiatan) {
      kegiatan.tahunkegiatan = req.body.tahunkegiatan;
      kegiatan.kategori = req.body.kategori;
      kegiatan.kepesertaan = req.body.kepesertaan;
      kegiatan.namakegiatan = req.body.namakegiatan;
      kegiatan.jmlpt = req.body.jmlpt;
      kegiatan.capaian = req.body.capaian;
      kegiatan.tglmulai = req.body.tglmulai;
      kegiatan.tglakhir = req.body.tglakhir;
      kegiatan.sertifpiala = req.body.sertifpiala;
      kegiatan.url = req.body.url;
      kegiatan.foto = req.body.foto;
      kegiatan.npm = req.body.npm;
      kegiatan.nama = req.body.nama;
      kegiatan.programstudi = req.body.programstudi;
      kegiatan.angkatan = req.body.angkatan;
      const updatedKegiatan = await kegiatan.save();
      res.send({ message: "Data Updated", kegiatan: updatedKegiatan });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

kegiatanRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const kegiatan = await Kegiatan.findById(req.params.id);
    if (kegiatan) {
      const deleteKegiatan = await kegiatan.remove();
      res.send({ message: "Data Deleted", kegiatan: deleteKegiatan });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

export default kegiatanRouter;
