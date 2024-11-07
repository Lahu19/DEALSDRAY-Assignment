// Importing the mongoose library to define schemas and interact with MongoDB
let mongoose = require("mongoose");

// Defining a schema for storing registered user information
// This schema outlines the structure of data for each registered user in the database
let schema1 = new mongoose.Schema({
    // User's name, stored as a String
    name: String,
    
    // User's email address, also stored as a String
    email: String,
    
    // Confirmed password for the user, stored as a String for now (consider hashing for security in production)
    cnfPassword: String,
});

// Creating a model called 'registeredUsers1' using the defined schema
// This model will represent the 'registeredUsers1' collection in MongoDB, handling all registered users
let registeredUsers = mongoose.model("registeredUsers1", schema1);

// Exporting the model to make it available for use in other modules
module.exports = registeredUsers;
