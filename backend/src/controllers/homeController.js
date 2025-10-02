const {db} = require("../config/mongoClient");

const getPopularUniversities = async (req, res) => {
  try {
    const popularUniversities = await db.collection("universities")
      .find({})
      .sort({ popularityScore: -1 })
      .limit(3)
      .toArray();
    res.json({ popularUniversities });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch popular universities" });
  }
};

const getPopularMajors = async (req, res) => {
  try {
    const popularMajors = await db.collection("majors")
      .find({})
      .sort({ popularityScore: -1 })
      .limit(3)
      .toArray();
    res.json({ popularMajors });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch popular majors" });
  }
};

const getPopularScholarships = async (req, res) => {
  try {
    const popularScholarships = await db.collection("scholarships")
      .find({})
      .sort({ popularityScore: -1 })
      .limit(3)
      .toArray();
    res.json({ popularScholarships });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch popular scholarships" });
  }
};

module.exports = { getPopularUniversities, getPopularMajors, getPopularScholarships };