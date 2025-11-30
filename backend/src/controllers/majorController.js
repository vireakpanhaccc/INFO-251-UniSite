const {db} = require("../config/mongoClient");

// Controller to get all majors
const getAllMajors = async (req, res) => {
  try {
    const majors = await db.collection("majors").find({}).toArray();
    res.status(200).json(majors);
  } catch (error) {
    console.error("Error fetching majors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const MajorById = async (req, res) => {
 
  try {
    const id = req.params.id;
    const major = await db.collection("majors").findOne({ _id: id });
    if (!major) {
      return res.status(404).json({ message: "Major not found" });
    }
    res.status(200).json(major);
  } catch (error) {
    console.error("Error fetching major by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = { getAllMajors, MajorById };