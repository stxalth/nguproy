import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import mahasiswaRouter from "./routers/mahasiswaRouter.js";
import userRouter from "./routers/userRouter.js";
import kegiatanRouter from "./routers/kegiatanRouter.js";
import uploadRouter from "./routers/uploadRouter.js";
import studiRouter from "./routers/studiRouter.js";

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
app.use("/api/datamahasiswa", mahasiswaRouter);
app.use("/api/daftarprogramstudi", studiRouter);
app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/daftarkegiatan", kegiatanRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
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
