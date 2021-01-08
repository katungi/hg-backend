const express = require("express");
const router = express.Router();

const ExperiencesCtrl = require("../controllers/experience");
const AuthCtrl = require("../controllers/auth");

router.get("/", ExperiencesCtrl.getExperiences);
router.get("/secret", AuthCtrl.requireSignin);
router.get("/:id", ExperiencesCtrl.getExperienceById);

router.post("", ExperiencesCtrl.createExperience);
router.post("/:id/join", AuthCtrl.requireSignin, ExperiencesCtrl.joinExperience);
router.post(
  "/:id/leave",
  AuthCtrl.requireSignin,
  ExperiencesCtrl.leaveExperience
);

router.patch("/:id", AuthCtrl.requireSignin, ExperiencesCtrl.updateExperience);
router.delete("/:id", AuthCtrl.requireSignin, ExperiencesCtrl.deleteExperience);

module.exports = router;
