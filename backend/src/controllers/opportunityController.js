const {db} = require("../config/mongoClient");

// Controller to get all scholarships
const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await db.collection("scholarships").find({}).toArray();
    res.status(200).json(scholarships);
  } catch (error) {
    console.error("Error fetching scholarships:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllScholarships };