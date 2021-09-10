import mongoose from "mongoose";

const studiSchema = new mongoose.Schema({
  kode: { type: Number },
  programstudi: { type: String },
});
const Studi = mongoose.model("Studi", studiSchema);

export default Studi;
