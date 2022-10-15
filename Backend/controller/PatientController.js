const { Patient } = require("../models/");
const fs = require("fs");
const path = require("path");

const getPatients = async (req, res) => {
  try {
    const response = await Patient.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
const getPatientById = async (req, res) => {};
const savePatient = async (req, res) => {};
const updatePatient = async (req, res) => {};
const deletePatient = async (req, res) => {};

module.exports = {
  getPatientById,
  getPatients,
  savePatient,
  updatePatient,
  deletePatient,
};
