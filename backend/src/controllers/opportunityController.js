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

const getScholarshipById = async (req, res) => {
 
  try {
    const id = req.params.id;
    const scholarship = await db.collection("scholarships").findOne({ _id: id });
    if (!scholarship) {
      return res.status(404).json({ message: "Scholarship not found" });
    }
    res.status(200).json(scholarship);
  } catch (error) {
    console.error("Error fetching scholarship by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getAllScholarships, getScholarshipById };