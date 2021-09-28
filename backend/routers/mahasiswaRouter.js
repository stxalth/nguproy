import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Mahasiswa from "../models/mahasiswaModel.js";
import { isAdmin, isAuth, isEditor } from "../utils.js";

const mahasiswaRouter = express.Router();

mahasiswaRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const mahasiswa = await Mahasiswa.find({});
    res.send(mahasiswa);
  })
);
mahasiswaRouter.get("/:id", async (req, res) => {
  const mahasiswa = await Mahasiswa.findOne({ _id: req.params.id });
  if (mahasiswa) {
    res.send(mahasiswa);
  } else {
    res.status(404).send({ message: "Data not found" });
  }
});

mahasiswaRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Mahasiswa.remove({});
    const createdMahasiswa = await Mahasiswa.insertMany(data.gunadarma);
    res.send({ createdMahasiswa });
  })
);

mahasiswaRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const mahasiswa = new Mahasiswa({
      nama: "",
      npm: "",
      programstudi: "",
      angkatan: "",
    });
    const createdMahasiswa = await mahasiswa.save();
    res.send({ message: "Data telah dibuat", mahasiswa: createdMahasiswa });
  })
);

mahasiswaRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const mahasiswaId = req.params.id;
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(mahasiswaId);
    if (mahasiswa) {
      mahasiswa.nama = req.body.nama;
      mahasiswa.npm = req.body.npm;
      mahasiswa.programstudi = req.body.programstudi;
      mahasiswa.angkatan = req.body.angkatan;
      const updatedMahasiswa = await mahasiswa.save();
      res.send({ message: "Data Updated", mahasiswa: updatedMahasiswa });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

mahasiswaRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (mahasiswa) {
      const deleteMahasiswa = await mahasiswa.remove();
      res.send({ message: "Data Deleted", mahasiswa: deleteMahasiswa });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

export default mahasiswaRouter;
