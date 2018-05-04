const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const molderSchema = new Schema({
  initials: { 
      type: String, 
      required: true 
  },
  userName: {
      type: String, 
      required: true
  },
  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true
  },
  password: { 
      type: String, 
      required: true
  }
});


const Molder = mongoose.model("Molder", molderSchema);

module.exports = Molder;