const express = require("express");
const {
  getPatientById,
  getPatients,
  savePatient,
  updatePatient,
  deletePatient,
} = require("../controller/PatientController");

const router = express.Router();

router.get("/patients", getPatients);
router.get("/patients/:id", getPatientById);
router.post("/patients", savePatient);
router.put("/patients/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

module.exports = router;
