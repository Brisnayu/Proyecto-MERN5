const Kitten = require("../models/kittens");
const {
  getAllKittenFromDB,
  getKittenByIdFromDB,
  createKittenInDB,
  updateKittenByIdInDB,
  deleteKittenByIdInDB,
} = require("../repository/kittens");

const getAllKitten = async (req, res, next) => {
  const { filter } = req.query;
  const kittens = await getAllKittenFromDB(filter);

  res.status(200).json({ data: kittens });
};

const getKittenById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const kitten = await getKittenByIdFromDB(id);
    res.status(200).json({ data: kitten });
  } catch (error) {
    console.log("El id es inválido, debes verificarlo 😿:", error);
    res.status(404).json({
      data: "Lo siento, pero el valor ingresado es incorrecto. Por favor, realice una verificación rápida 😬!",
    });
  }
};

const createKitten = async (req, res, next) => {
  try {
    const newKitten = await createKittenInDB(req.body);
    res.status(201).json({ data: newKitten });
  } catch (error) {
    console.log("Lo siento! No se ha creado el gatito correctamente 😿", error);
    res.status(500).json({ data: error.message });
  }
};

const updateKittenById = async (req, res, next) => {
  const { id } = req.params;
  const newKitten = new Kitten(req.body);
  newKitten._id = id;

  const updateKitten = await updateKittenByIdInDB(id, newKitten);
  return res.status(200).json({ data: updateKitten });
};

const deleteKittenById = async (req, res, next) => {
  const { id } = req.params;
  deleteKittenByIdInDB(id);
  res.status(200).json({ data: "Eliminado correctamente! 😼" });
};

module.exports = {
  getAllKitten,
  getKittenById,
  createKitten,
  updateKittenById,
  deleteKittenById,
};
