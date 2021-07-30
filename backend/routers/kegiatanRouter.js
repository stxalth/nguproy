import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Kegiatan from "../models/kegiatanModel.js";
import { isAdmin, isAuth } from "../utils.js";

const kegiatanRouter = express.Router();

kegiatanRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const kegiatan = await Kegiatan.find({});
    res.send(kegiatan);
  })
);

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
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const kegiatan = new Kegiatan({
      tahunkegiatan: "fhaslkfhaukls",
      kategori: "whdadwal",
    });
    const createdKegiatan = await kegiatan.save();
    res.send({ message: "Data telah dibuat", kegiatan: createdKegiatan });
  })
);

kegiatanRouter.delete(
  "/:id",
  // isAuth,
  // isAdmin,
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
