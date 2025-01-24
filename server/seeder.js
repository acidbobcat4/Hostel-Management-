import dotenv from "dotenv";
import mongoose from "mongoose";
import students from "./data/students.js"; // Importing sample students
import Student from "./models/student.js";
import connectDB from "./config/mongoDBConfig.js";

dotenv.config(); // Load environment variables

connectDB(); // Connect to the database

// Function to import sample data
const importData = async () => {
  try {
    // Clear the existing data
    await Student.deleteMany();

    // Insert the sample student data
    await Student.insertMany(students);

    console.log("Data Imported Successfully!");
    process.exit(); // Exit the process
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); // Exit the process with failure
  }
};

// Function to destroy data
const destroyData = async () => {
  try {
    // Clear the existing data
    await Student.deleteMany();

    console.log("Data Destroyed Successfully!");
    process.exit(); // Exit the process
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); // Exit the process with failure
  }
};

// Command-line argument handling
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
