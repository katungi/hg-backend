const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { OAuth2Client } = require("google-auth-library");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }

    const { name, email, password } = req.body;
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ name, email, password, profile, username });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        // message: "Sign Up Succesful",
        user: success,
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  //check if User Exists
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please sign up",
      });
    }

    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and Password do not match",
      });
    }

    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, email, role } = user;
    return res.json({
      token,
      user: { _id, username, name, email, role },
    });
  });
};

// kick people out the app
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout success",
  });
};

// hide stuff from non-logged in users.
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET, // req.user
  algorithms: ["HS256"], // specify the algorithm. Wont work otherwise
});

exports.onlyAuthUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).send({ errors: { auth: "Not Authenticated!" } });
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// exports.googleLogin = (req, res) => {
//   const idToken = req.body.token;
//   const ticket = client.verifyIdToken({
//     idToken,
//     audience: process.env.GOOGLE_CLIENT_ID
//   });

//   const {name, email, email_verified, jti} = ticket;

//   if(email_verified) {
//     User.findOne({
//       email
//     }).exec((err, user)=>{
//       if(user) {
//         const token  = jwt.sign({
//           _id: user._id}, process.env.JWT_SECRET,{
//             expiresIn: "1d"
//         });
//         res.cookie("token", token, {
//           expiresIn: "1d"
//         });
//         const {_id, email, name, role, username} = user;
//         return res.json({
//           token,
//           user:{ _id, email, name, role, username}
//         });
//       } else {
//         //create the credentials on the go:

//         let username = shortId.generate();
//         let profile = `${process.env.CLIENT_URL}/profile/${username}`;
//         let password = jti;
//         user = new User({
//           name, email, profile,username, password
//         });
//        user.save((err,data)=>{
//          if(err) {
//            return res.status(400).json({
//              error: error
//            });
//          }
//          const token = jwt.sign(
//            {_id: data._id},
//            process.env.JWT_SECRET,
//            {expiresIn: "1d"}
//          );
//          res.cookie("token", token, {
//            expiresIn: "1d"
//          });
//          const {_id, email, name, role, username} = data;
//          return res.json({
//            token,
//            user: {_id, email, name, role, username}
//          });
//        });
//       }
//     })
//   } else {
//     return res.status(400).json({
//       error: "Google Login failed"
//     })
//   }
// };

exports.googleLogin = (req, res) => {
  const idToken = req.body.tokenId;
  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID })
    .then((response) => {
      // console.log(response)
      const { email_verified, name, email, jti } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            // console.log(user)
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: "1d",
            });
            res.cookie("token", token, { expiresIn: "1d" });
            const { _id, email, name, role, username } = user;
            console.log(user);
            return res.json({
              token,
              user: { _id, email, name, role, username },
            });
          } else {
            let username = shortId.generate();
            let profile = `${process.env.CLIENT_URL}/profile/${username}`;
            let password = jti;
            user = new User({ name, email, profile, username, password });
            user.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: err,
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
              );
              res.cookie("token", token, { expiresIn: "1d" });
              const { _id, email, name, role, username } = data;
              return res.json({
                token,
                user: { _id, email, name, role, username },
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: "Google login failed. Try again.",
        });
      }
    });
};
