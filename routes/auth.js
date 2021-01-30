const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
  googleLogin,
} = require("../controllers/auth.js");
const cors = require('cors')

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
router.post("/google-login", cors(), googleLogin);

router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "you have access to the secret page dummy!",
  });
});

module.exports = router;
