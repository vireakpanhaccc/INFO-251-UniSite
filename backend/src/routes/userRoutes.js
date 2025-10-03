const express = require("express");
const {db} = require("../config/mongoClient");

const userRouter = express.Router();

userRouter.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await db.collection("users").findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = userRouter;