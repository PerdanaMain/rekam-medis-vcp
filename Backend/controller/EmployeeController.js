const { Employee } = require("../models");
const fs = require("fs");
const path = require("path");

const getEmployees = async (req, res) => {
  try {
    const response = await Employee.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
const getEmployeeById = async (req, res) => {};
const saveEmployee = async (req, res) => {};
const updateEmployee = async (req, res) => {};
const deleteEmployee = async (req, res) => {};

module.exports = {
  getEmployeeById,
  getEmployees,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
};
