const express = require("express");
const router = new express.Router();

const {
  saveEtudiant,
  deleteEtudiant,
  UpdateEtudiant,
  getEtudiant,
  getSingleEtudiant
} = require("../controllers/Users");

router.post("/saveEtudient",saveEtudiant);
router.get("/getEtudiant", getEtudiant);
router.get("/getEtudiant/:id", getSingleEtudiant);
router.put("/updateUsers/:id", UpdateEtudiant);
router.delete("/destroyUsers/:id", deleteEtudiant);

module.exports = router;
