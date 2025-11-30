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

const getMajorDetails = async (req, res) => {
  const majorId = req.params.id;

  try {
    const major = await db.collection("majors").findOne({ _id: majorId });

    if (!major) {
      return res.status(404).json({ message: "Major not found" });
    }

    res.status(200).json(major);
  } catch (error) {
    console.error("Error fetching major details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getAllMajors, getMajorDetails }; 