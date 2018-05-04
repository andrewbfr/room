const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skiSchema = new Schema({
  kind: {
      type: String,
      required: true,
      min: [4],
      max: 130
  },
  topsheet: {
      type: String,
      required: true,
  },
  length: {
      required: true,
      type: Number
  },
  waistWidth: {
    required: true,
    type: Number
  }
});


const Ski = mongoose.model("Ski", skiSchema);

module.exports = Ski;