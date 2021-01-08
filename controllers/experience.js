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
    .sort({ createdAt: -1 })
    .exec((errors, experiences) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      if (category) {
        experiences = experiences.filter((experience) => {
          return experience.category.name === category;
        });
      }

      Experience.count({}).then((count) => {
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

exports.joinExperience = function (req, res) {
  const user = req.user;
  const { id } = req.params;

  Experience.findById(id, (errors, experience) => {
    if (errors) {
      return res.status(422).send({ errors });
    }

    experience.joinedPeople.push(user);
    experience.joinedPeopleCount++;

    return Promise.all([
      experience.save(),
      User.updateOne(
        { _id: user.id },
        { $push: { joinedExperiences: experience } }
      ),
    ])
      .then((result) => res.json({ id }))
      .catch((errors) => res.status(422).send({ errors }));
  });
};

exports.leaveExperience = function (req, res) {
  const user = req.user;
  const { id } = req.params;

  Promise.all([
    Experience.updateOne(
      { _id: id },
      { $pull: { joinedPeople: user.id }, $inc: { joinedPeopleCount: -1 } }
    ),
    User.updateOne({ _id: user.id }, { $pull: { joinedExperiences: id } }),
  ])
    .then((result) => res.json({ id }))
    .catch((errors) => res.status(422).send({ errors }));
};

exports.updateExperience = function (req, res) {
  const experieceData = req.body;
  const { id } = req.params;
  const user = req,
    user;
  experienceData.updatedAt = new Date();

  if (user.id === experienceData.experienceCreator._id) {
    Experience.findByIdAndUpdate(id, { $set: meetupData }, { new: true })
      .populate("ExperienceCreator", "name id avatar")
      .populate("category")
      .exec((errors, updatedMeetup) => {
        if (errors) {
          return res.status(422).send({ errors });
        }

        return res.json(updatedMeetup);
      });
  } else {
    return res.status(401).send({ errors: { message: "Not Authorized!" } });
  }
};

exports.deleteExperience = function (req, res) {
  const { id } = req.params;
  const user = req.user;

  Experience.findById(id, (errors, meetup) => {
    if (errors) {
      return res.status(422).send({ errors });
    }

    if (experience.experienceCreator != user.id) {
      return res.status(401).send({ errors: { message: "Not Authorized!" } });
    }

    experience.remove((errors, _) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      return res.json(meetup._id);
    });
  });
};
