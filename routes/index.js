import express from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import {
  viewLogin,
  viewRegist,
  viewDashboard,
  viewObat,
  viewAddObat,
  viewPasien,
  viewPegawai,
  viewAddPasien,
  viewUpdatePasien,
} from "../controllers/ViewController.js";
import {
  savePatient,
  deletePatient,
} from "../controllers/PatientController.js";
import { Login, Logout, Register } from "../controllers/UserController.js";
import { saveMedicine } from "../controllers/MedicineController.js";

const router = express.Router();

// ? Endpoint to render
router.get("/", viewLogin);
router.get("/reg", viewRegist);

router.get("/pasien", verifyUser, viewPasien);
router.get("/addpasien", verifyUser, viewAddPasien);
router.get("/pasien", verifyUser, viewUpdatePasien);
router.post("/deletepasien/:id", verifyUser, deletePatient);
router.post("/addpasien", verifyUser, savePatient);

router.get("/pegawai", verifyUser, viewPegawai);

router.get("/dashboard", verifyUser, viewDashboard);

// ? process endpoint
router.post("/reg", Register);
router.post("/login", Login);
router.post("/logout", Logout);

export default router;
