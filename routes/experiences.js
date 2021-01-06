const express = require("express");
const router = express.Router();

const ExperiencesCtrl = require("../controllers/");

router.get("/", ExperiencesCtrl.getExperiences);
router.post("", ExperiencesCtrl.createExperience);
