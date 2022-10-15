import express from "express";
import {
  getCheckUp,
  getCheckUpById,
  saveCheckUp,
  updateCheckUp,
  deleteCheckUp,
} from "../controllers/CheckUpController.js";

const router = express.Router();

router.get("/checkup", getCheckUp);
router.get("/checkup/:id", getCheckUpById);
router.post("/checkup", saveCheckUp);
router.patch("/checkup/:id", updateCheckUp);
router.delete("/checkup/:id", deleteCheckUp);

export default router;
