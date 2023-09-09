const express = require("express");
const Kitten = require("../models/kittens");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const kittens = await Kitten.find();

  res.status(200).json({ data: kittens });
});

router.post("/", async (req, res, next) => {
  try {
    const newKitten = new Kitten(req.body);
    console.log(req.body);

    const createdKitten = await newKitten.save();
    res.status(201).json({ data: createdKitten });
  } catch (error) {
    console.log("error creando");
    res.status(500).json({ error });
  }
});

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    await Kitten.deleteOne({ _id: id })

    res.status(200).json({ data: "Eliminado correctamente! 😼"})
} )

module.exports = router;
