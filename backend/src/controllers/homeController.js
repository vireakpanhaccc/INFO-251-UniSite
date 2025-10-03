const {db} = require("../config/mongoClient");

const getPopularUniversities = async (req, res) => {
  try {
    const universities = await db.collection("universities")
      .find({})
      .sort({ ranking: -1 })
      .limit(4)
      .toArray();
    res.status(200).json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPopularMajors = async (req, res) => {
  try {
    const majors = await db.collection("majors")
      .find({})
      .limit(4)
      .toArray();
    res.status(200).json(majors);
  } catch (error) {
    console.error("Error fetching majors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPopularScholarships = async (req, res) => {
  try {
    const scholarships = await db.collection("scholarships")
      .find({})
      .limit(4)
      .toArray();
    res.status(200).json(scholarships);
  } catch (error) {
    console.error("Error fetching scholarships:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getPopularUniversities, getPopularMajors, getPopularScholarships };