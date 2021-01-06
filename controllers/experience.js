const experiences = require("../models/experiences");
const Experience = require("../models/experiences");
const User = require("../models/user");

exports.getExperiences = function (req, res) {
  const { category } = req.query;
  // page setup for frontend

  const pageSize = parseInt(req.query.pageSize);
  const pageNum = parseInt(req.query.pageNum);
 //  const skips = pageSize * (pageNum - 1);

  Experience.count({}).then((count) => {
    return res.json({
      experiences: experiences.splice(0, pageSize),
      count,
      pageCount: count / pageSize,
    });
  });
};
exports.createExperience = function (req, res) {
  const experienceData = req.body;
  const user = req.user;
  const experience = new Meetup(experienceData);
  experience.user = user;
  experience.status = "active";
  experience.save((errors, createdExperience) => {
    if (errors) {
      return res.status(422).send({ errors });
    }
    return res.json(createdExperience);
  });
};
