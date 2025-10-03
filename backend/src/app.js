const express = require("express");
const cors = require("cors");
const app = express();
const {logRequest} = require("./middlewares/logMiddleware");
const homeRouter = require("./routes/homeRoutes");
const uniRouter = require("./routes/universityRoutes");
const majorRouter = require("./routes/majorRoutes");
const opportunityRouter = require("./routes/opportunityRoutes");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Log all incoming requests
app.use(logRequest);

// Routers
app.use("/home", homeRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/universities", uniRouter);
app.use("/majors", majorRouter);
app.use("/opportunities", opportunityRouter);

module.exports = app;
