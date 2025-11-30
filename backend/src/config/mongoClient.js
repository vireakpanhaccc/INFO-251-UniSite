const path = require("path");
// Load .env from the backend folder (project root for backend)
require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") });
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error(
    "MONGODB_URI is not defined. Make sure backend/.env exists and contains MONGODB_URI."
  );
  console.error(
    "Tried to load .env from",
    path.resolve(__dirname, "..", "..", ".env")
  );
  process.exit(1);
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to MongoDB Atlas and handle connection lifecycle
async function connectToDatabase() {
  try {
    // Attempt to connect to MongoDB
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    // Catch any errors and log them
    console.error("Failed to connect to MongoDB Atlas:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

// Run the connection function
connectToDatabase();

// Access the database after connection
const db = mongoClient.db("UniSites"); // Replace with your database name

// Gracefully shut down the connection on process termination
process.on("SIGINT", async () => {
  console.log("Received SIGINT. Shutting down...");
  await mongoClient.close(); // Close the connection to MongoDB
  console.log("MongoDB connection closed.");
  process.exit(0); // Exit the process gracefully
});

process.on("SIGTERM", async () => {
  console.log("Received SIGTERM. Shutting down...");
  await mongoClient.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

module.exports = { mongoClient, db };
