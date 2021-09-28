import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Studi from "../models/studiModel.js";
import { isAuth } from "../utils.js";

const studiRouter = express.Router();

studiRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const studi = await Studi.find({});
    res.send(studi);
  })
);

studiRouter.get("/:id", async (req, res) => {
  const studi = await Studi.findOne({ _id: req.params.id });
  if (studi) {
    res.send(studi);
  } else {
    res.status(404).send({ message: "Data not found" });
  }
});

studiRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Studi.remove({});
    const createdStudi = await Studi.insertMany(data.gunadarma);
    res.send({ createdStudi });
  })
);

studiRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const studi = new Studi({
      kode: "",
      programstudi: "",
    });
    const createdStudi = await studi.save();
    res.send({ message: "Data telah dibuat", studi: createdStudi });
  })
);

studiRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const studiId = req.params.id;
    const studi = await Studi.findByIdAndUpdate(studiId);
    if (studi) {
      studi.kode = req.body.kode;
      studi.programstudi = req.body.programstudi;

      const updatedStudi = await studi.save();
      res.send({ message: "Data Updated", studi: updatedStudi });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

studiRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const studi = await Studi.findById(req.params.id);
    if (studi) {
      const deleteStudi = await studi.remove();
      res.send({ message: "Data Deleted", studi: deleteStudi });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

export default studiRouter;
