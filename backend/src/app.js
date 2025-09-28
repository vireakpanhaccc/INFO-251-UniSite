const express = require("express");
const cors = require("cors");
const app = express();
const uniRouter = require("./routes/universityRoutes");
const majorRouter = require("./routes/majorRoutes");
const opportunityRouter = require("./routes/opportunityRoutes");


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/universities", uniRouter);
app.use("/majors", majorRouter);
app.use("/opportunities", opportunityRouter);


// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API, One Piece fans!" });
});

module.exports = app;
