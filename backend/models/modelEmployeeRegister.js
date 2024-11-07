// Importing the mongoose library to define schema and interact with MongoDB
let mongoose = require("mongoose");

// Defining a new schema for employee registration with mongoose
// This schema represents the structure of data to be stored in MongoDB for each employee
let schema1 = new mongoose.Schema({
    // Employee name of type String
    name: String,

    // Employee email address, stored as a String
    email: String,

    // Employee phone number, stored as a Number
    phone: Number,

    // Employee designation or job title, stored as a String
    designation: String,

    // Employee gender, stored as a String
    gender: String,

    // Path or URL to the employee's image, stored as a String
    image: String,

    // Array to store employee's courses, with an empty array as default
    course: {
        type: Array,
        default: []
    },
});

// Creating a model named 'modelEmployeeRegister1' using the defined schema
// This model will represent the collection in MongoDB and allow CRUD operations
let modelEmployeeRegister = mongoose.model("modelEmployeeRegister1", schema1);

// Exporting the model to make it accessible in other files
module.exports = modelEmployeeRegister;
