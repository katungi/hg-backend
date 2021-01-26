const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
  googleLogin,
  passportLogin,
  passportPreLogin
} = require("../controllers/auth.js");
const passport = require("passport");

// validators
const { runValidation } = require("../validators/index");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);

// google login
router.post("/google-login", googleLogin);

router.get("/auth/google/redirect", passportPreLogin );

// this is for testing btw -- remove it from production

router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "you have access to the secret page dummy!",
  });
});
module.exports = router;
