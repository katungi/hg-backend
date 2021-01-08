const Experience = require("../models/experiences");
const User = require("../models/user");

exports.getExperiences = function (req, res) {
  const { category, location } = req.query;
  // page setup for frontend

  const pageSize = parseInt(req.query.pageSize);
  const pageNum = parseInt(req.query.pageNum);
  const skips = pageSize * (pageNum - 1);

  const findQuery = location
    ? Experience.find({ processedLocation: { $regex: ".*" + location + ".*" } })
    : Experience.find({});

  findQuery
    .populate("category")
    .populate("joinedPeople")
    .skip(skips)
    .limit(pageSize)
    .sort({ 'createdAt': -1})
    .exec((errors, experiences) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      if (category) {
        experiences = experiences.filter((experience) => {
          return experience.category.name === category;
        });
      }

      Experience.count({}).then(count => {
        return res.json({
          experiences: experiences,
          count,
          pageCount: count / pageSize,
        });
      });
    });
};
exports.createExperience = function (req, res) {
  const experienceData = req.body;
  const user = req.user;
  const experience = new Experience(experienceData);
  experience.user = user;
  experience.status = "active";
  experience.save((errors, createdExperience) => {
    if (errors) {
      return res.status(422).send({ errors });
    }
    return res.json(createdExperience);
  });
};
