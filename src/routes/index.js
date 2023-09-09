const express = require("express");
const kittenRouter = require("./kittens");

const router = express.Router();

router.use("/kittens", kittenRouter);

module.exports = router;
