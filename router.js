const express = require("express");
const {
  getDataMhs,
  getDataMhsById,
  addDataMhs,
  updateDataMhs,
  deleteDataMhs,
} = require("./Controller/MahasiswaController");

const router = express.Router();

router.get("/mahasiswa", getDataMhs);
router.get("/mahasiswa/:id", getDataMhsById);
router.post("/addMahasiswa", addDataMhs);
router.put("/updateMahasiswa/:id", updateDataMhs);
router.delete("/deleteMahasiswa/:id", deleteDataMhs);


module.exports = router;
