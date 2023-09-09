const express = require("express");
require("./config/db");
const mainRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/api", mainRouter);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en: http://localhost:${PORT}`);
});
