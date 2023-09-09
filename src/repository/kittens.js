const Kitten = require("../models/kittens");

const getAllKittenFromDB = async (filter) => {
  const filterOptions = {
    $or: [
      { name: { $regex: new RegExp(filter, "i") } },
      { race: { $regex: new RegExp(filter, "i") } },
      { color: { $regex: new RegExp(filter, "i") } },
      { responsiblePerson: { $regex: new RegExp(filter, "i") } },
    ],
  };

  const kittens = await Kitten.find(filter ? filterOptions : {});
  return kittens;
};

const getKittenByIdFromDB = async (id) => {
  const kittens = await Kitten.findById(id);
  return kittens;
};

const createKittenInDB = async (payload) => {
  const newKitten = new Kitten(payload);
  await newKitten.save();

  return newKitten;
};

const updateKittenByIdInDB = async (id, payload) => {
  const kitten = await Kitten.findByIdAndUpdate(id, payload, { new: true });
  return kitten;
};

const deleteKittenByIdInDB = async (id) => {
    await Kitten.deleteOne({ _id: id });
};

module.exports = {
  getAllKittenFromDB,
  getKittenByIdFromDB,
  createKittenInDB,
  updateKittenByIdInDB,
  deleteKittenByIdInDB,
};
