const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const molderSchema = new Schema({
  nom: { 
      type: String, 
      required: true,
      min: [6],
      max: 119 
  },
  password: { 
      type: String, 
      required: true,
      min: [6],
      max: 119
  }
});


const Molder = mongoose.model("Molder", molderSchema);

module.exports = Molder;