const express = require("express");
const router = express.Router();

const ExperiencesCtrl = require("../controllers/experience");
const AuthCtrl = require('../controllers/auth');

router.get("/", ExperiencesCtrl.getExperiences);
router.get('/secret', AuthCtrl.onlyAuthUser);
router.get('/:id', ExperiencesCtrl.get)
router.post("", ExperiencesCtrl.createExperience);

module.exports = router;