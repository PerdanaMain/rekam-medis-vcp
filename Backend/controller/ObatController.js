const { Medicine } = require("../models");
const fs = require("fs");
const path = require("path");

const getMedicines = async (req, res) => {
  try {
    const response = await Medicine.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
const getMedicineById = async (req, res) => {};
const saveMedicine = async (req, res) => {};
const updateMedicine = async (req, res) => {};
const deleteMedicine = async (req, res) => {};

module.exports = {
  getMedicineById,
  getMedicines,
  saveMedicine,
  updateMedicine,
  deleteMedicine,
};
