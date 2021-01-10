const mongoose = require("mongoose");
const Experience = require("./models/experiences");
const User = require("./models/user");
const Category = require("./models/category");
const data = require("./data");
const experiences = require("./models/experiences");
require('dotenv').config()

class DB {
  constructor() {
    this.experiences = data.experiences;
    this.users = data.users;
    this.categories = data.categories;
    this.models = [Experience, User, Category];
  }
  async cleanDb() {
    for (let model of this.models) {
      await model.deleteMany({}, () => {});
      console.log(`Data for model ${model.collection.collectionName} Deleted!`);
    }
  }

  async pushDataToDb() {
    await this.categories.forEach(async (category) => {
      const newCategory = new Category(category);
      await newCategory.save(() => {});
    });

    await this.users.forEach(async (user) => {
      await new User(user).save(() => {});
    });

    await this.experiences.forEach(async (experience) => {
      await new Experience(experience).save(() => {});
    });

    console.log("Database Populated!");
  }

  async seedDb() {
    await this.cleanDb();
    await this.pushDataToDb();
  }
}

mongoose
  .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const db = new DB();
    await db.seedDb();
    console.log("You can close connection now!");
  })
  .catch((err) => console.log(err));
