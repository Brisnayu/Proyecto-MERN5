const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose
  .connect("mongodb://0.0.0.0:27017/kittens-for-adoption")
  .then(() => console.log("Conectado a MongoDB 😸"))
  .catch((error) => console.log("Error al conectarse a MongoDB 😿", error));
