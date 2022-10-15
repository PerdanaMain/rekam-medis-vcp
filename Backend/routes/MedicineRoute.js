import express from "express";
import {
  getMedicine,
  getMedicineById,
  saveMedicine,
  updateMedicine,
  deleteMedicine,
} from "../controllers/MedicineController.js";

const router = express.Router();

router.get("/medicine", getMedicine);
router.get("/medicine/:id", getMedicineById);
router.post("/medicine", saveMedicine);
router.patch("/medicine/:id", updateMedicine);
router.delete("/medicine/:id", deleteMedicine);

export default router;
