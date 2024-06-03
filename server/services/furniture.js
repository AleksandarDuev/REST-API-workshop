const Item = require("../models/Item");

async function getAll() {
  return Item.find({});
}

async function create(item) {
  const result = new Item(item);
  await result.save();
  return result;
}

 function getById(id) {
  return Item.findById(id);
}

async function updateById(id, item) {
  const existing = await Item.findById(id);

  existing.make = item.make;
  existing.model = item.model;
  existing.year = item.year;
  existing.description = item.description;
  existing.price = item.price;
  existing.img = item.img;
  existing.material = item.material;

  await existing.save();
  return existing;
}

async function deleteById(id) {
    await Item.findByIdAndDelete(id); // не връща изтрития запис
}

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById
};
