const express = require("express");
const router = express.Router();

const ExperiencesCtrl = require("../controllers/experience");
const AuthCtrl = require("../controllers/auth");

router.get("/", ExperiencesCtrl.getExperiences);
router.get("/secret", AuthCtrl.onlyAuthUser);
router.get("/:id", ExperiencesCtrl.getExperienceById);

router.post("", ExperiencesCtrl.createExperience);
router.post("/:id/join", AuthCtrl.onlyAuthUser, ExperiencesCtrl.joinExperience);
router.post(
  "/:id/leave",
  AuthCtrl.onlyAuthUser,
  ExperiencesCtrl.leaveExperience
);

router.patch("/:id", AuthCtrl.onlyAuthUser, ExperiencesCtrl.updateExperience);
route.delete("/:id", AuthCtrl.onlyAuthUser, ExperiencesCtrl.deleteExperience);

module.exports = router;
