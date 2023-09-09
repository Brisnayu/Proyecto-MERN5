const mongoose = require("mongoose");

const kittenSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  race: { type: String, required: true, trim: true },
  color: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
  responsiblePerson: { type: String, required: true, trim: true },
});

const Kitten = mongoose.model("Kitten", kittenSchema);

module.exports = Kitten;
