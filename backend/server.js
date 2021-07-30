import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import kegiatanRouter from "./routers/kegiatanRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/nguproy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//if you've made the data Router, you don't need the static data below.
//then you can also get rid the import data from data.js when you're done.
app.get("/api/daftarprogramstudi", (req, res) => {
  res.send(data.daftarprogramstudi);
});
app.get("/api/datamahasiswa", (req, res) => {
  res.send(data.datamahasiswa);
});
app.use("/api/users", userRouter);
app.use("/api/daftarkegiatan", kegiatanRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
