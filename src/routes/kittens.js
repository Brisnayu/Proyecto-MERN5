const express = require("express");
const {
  getAllKitten,
  getKittenById,
  createKitten,
  updateKittenById,
  deleteKittenById,
} = require("../controllers/kittens");

const router = express.Router();

router.get("/", getAllKitten);
router.get("/:id", getKittenById);
router.post("/", createKitten);
router.put("/:id", updateKittenById);
router.delete("/:id", deleteKittenById);

module.exports = router;
