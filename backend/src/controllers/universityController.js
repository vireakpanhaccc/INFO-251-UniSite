const {db} = require("../config/mongoClient");

// Controller to get all universities
const getAllUniversities = async (req, res) => {
  try {
    const universities = await db.collection("universities").find({}).toArray();
    res.status(200).json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllUniversities };