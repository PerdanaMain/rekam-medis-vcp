import express from "express";
import {
  getPatient,
  getPatientById,
  savePatient,
  updatePatient,
  deletePatient,
} from "../controllers/PatientController";

const router = express.Router();

router.get("/patient", getPatient);
router.get("/patient/:id", getPatientById);
router.post("/patient", savePatient);
router.patch("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);

export default router;
