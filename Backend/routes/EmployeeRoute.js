import express from "express";
import {
  getEmployee,
  getEmployeeById,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/EmployeeController.js";

const router = express.Router();

router.get("/employee", getEmployee);
router.get("/employee/:id", getEmployeeById);
router.post("/employee", saveEmployee);
router.patch("/employee/:id", updateEmployee);
router.delete("/employee/:id", deleteEmployee);

export default router;
