const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// routes
const authRoutes = require("./routes/auth");
const experienceRoutes = require("./routes/experiences");
const categoriesRoutes = require('./routes/categories');
// express app
const app = express();
// mongoose
mongoose
  .connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// setup cors for client app
if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
app.use(cors());  

// routes
app.use("/api", authRoutes);
app.use("/api/experiences", experienceRoutes);
app.use('/api/categories', categoriesRoutes);

app.get("/", (req, res) => {
  res.send("If you can see this, you shouldn't be");
});
// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
