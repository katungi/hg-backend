const mongoose = require("mongoose");
const Experiences = require("./experiences");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    avatar: String,
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      lowercase: true,
    },
    profile: {
      type: String,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    about: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    role: {
      type: Number,
      trim: true,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
    joinedExperiences: [{ type: Schema.Types.ObjectId, ref: "Experiences" }],
  },
  { timestamp: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    // create  temporary var called _password
    this._password = password;
    // generate salt
    this.salt = this.makeSalt();
    //encrypt the password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};
// the user object is the first argument and the timestamp is the second argument

module.exports = mongoose.model("User", userSchema);
