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

const getUniversityDetails = async (req, res) => {
  try {
    const universityId = req.params.id;
    const university = await db.collection("universities").findOne({ _id: universityId });
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json(university);
  } catch (error) {
    console.error("Error fetching university details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllUniversities, getUniversityDetails };