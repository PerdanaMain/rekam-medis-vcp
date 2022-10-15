const express = require("express");
const {
  getEmployeeById,
  getEmployees,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/EmployeeController");

const router = express.Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", saveEmployee);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

module.exports = router;
