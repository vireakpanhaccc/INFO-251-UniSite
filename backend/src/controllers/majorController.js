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

module.exports = { getAllMajors };