const express = require("express");
const router = express.Router();
const { signup, signin, signout, requireSignin } = require("../controllers/auth.js");

// validators
const { runValidation } = require("../validators/index");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get('/signout', signout)

// this is for testing btw

router.get('/secret',requireSignin, (req, res)=> {
    res.json({
        message: 'you have access to the secret page dummy!'
    })
})
module.exports = router;
