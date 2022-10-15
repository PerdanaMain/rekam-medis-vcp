const express = require("express");
const {
  getMedicineById,
  getMedicines,
  saveMedicine,
  updateMedicine,
  deleteMedicine,
} = require("../controller/ObatController");

const router = express.Router();

router.get("/medicines", getMedicines);
router.get("/medicines/:id", getMedicineById);
router.post("/medicines", saveMedicine);
router.put("/medicines/:id", updateMedicine);
router.delete("/medicines/:id", deleteMedicine);

module.exports = router;
