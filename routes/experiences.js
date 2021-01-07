const express = require("express");
const router = express.Router();

const ExperiencesCtrl = require("../controllers/experience");

router.get("/", ExperiencesCtrl.getExperiences);
router.post("", ExperiencesCtrl.createExperience);

module.exports = router;