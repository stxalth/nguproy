import mongoose from "mongoose";

const studiSchema = new mongoose.Schema({
  kode: { type: Number },
  program: { type: Object },
});
const Studi = mongoose.model("Studi", studiSchema);

export default Studi;
