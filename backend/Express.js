// Importing required modules
let expressApp = require("express");
let mongooseClient = require("mongoose");
let jsonParser = require("body-parser");
let httpRequest = require("axios");
let corsMiddleware = require("cors");
let fileUpload = require("multer");
let userRecords = require("./models/registeredUsers");
let employeeRecords = require("./models/modelEmployeeRegister");

// Initializing express application
let server = expressApp();
server.use(corsMiddleware());
server.use(jsonParser.json());
server.use(jsonParser.urlencoded({ extended: true }));

// MongoDB connection
mongooseClient.connect("mongodb://127.0.0.1:27017/loginCredentials");
mongooseClient.connection
    .once("open", () => { console.log("Connected to DB....."); })
    .on("error", () => { console.log("Problem connecting to DB ..!!!!!"); });

// Configuring multer for file uploads
let storageConfig = fileUpload.diskStorage({
    destination: function (req, image, callback) {
        return callback(null, "./Images");
    },
    filename: function (req, image, callback) {
        return callback(null, `${image.originalname}`);
    }
});
let fileUploader = fileUpload({ storage: storageConfig });

// Handling user registration
server.post("/register", (req, res) => {
    userRecords.findOne({ email: req.body.email })
        .then((existingUser) => {
            if (existingUser !== null) {
                res.json("Email already registered..");
            } else {
                let newUser = new userRecords(req.body);
                newUser.save()
                    .then(() => { res.json("Input stored in DB successfully..."); })
                    .catch(() => res.json("Data could not be saved, problem during save..."));
            }
        })
        .catch(() => {
            res.json("Registration problem...");
        });
});

// Handling user login
server.post("/login", (req, res) => {
    userRecords.findOne({ email: req.body.email })
        .then((user) => {
            if (user.cnfPassword === req.body.password) {
                res.json({ "status": "success", "id": user._id });
            } else {
                res.json({ "status": "fail" });
            }
        })
        .catch(() => { res.json({ "status": "noUser" }); });
});

// Fetching user data for the Dashboard component
server.get("/user/:ID", (req, res) => {
    let userID = req.params.ID;
    userRecords.findOne({ _id: userID })
        .then((user) => { res.json(user.name); })
        .catch(() => { console.log("Problem fetching user data from Express.."); });
});

// Storing employee data
server.post("/employees", fileUploader.single("image"), (req, res) => {
    employeeRecords.findOne({ email: req.body.email })
        .then((existingEmployee) => {
            if (existingEmployee !== null) {
                res.json("Email already registered..");
            } else {
                let newEmployee = new employeeRecords({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    designation: req.body.designation,
                    gender: req.body.gender,
                    course: req.body.course,
                    image: req.file.filename
                });
                newEmployee.save()
                    .then(() => { res.json("Input stored in DB successfully..."); })
                    .catch(() => res.json("Data could not be saved, problem during save..."));
            }
        })
        .catch(() => {
            res.json("Registration problem...");
        });
});

// Fetching list of employees
server.get("/employee-list", (req, res) => {
    employeeRecords.find()
        .then((employees) => {
            res.send(employees);
        });
});

// Fetching specific employee data for editing
server.get("/employee-list/:ID", (req, res) => {
    let employeeID = req.params.ID;
    employeeRecords.findOne({ _id: employeeID })
        .then((employee) => {
            res.send(employee);
        })
        .catch(() => {
            res.send("Employee not found");
        });
});

// Updating employee information
server.put("/employee-list/:ID", fileUploader.single("image"), (req, res) => {
    let employeeID = req.params.ID;
    employeeRecords.updateOne({ _id: employeeID }, req.body)
        .then(() => { res.send("Successfully updated data"); })
        .catch(() => { res.send("Error at update API"); });
});

// Deleting an employee record
server.delete("/employee-list/:ID", (req, res) => {
    let employeeID = req.params.ID;
    employeeRecords.deleteOne({ _id: employeeID })
        .then(() => { res.send("User deleted.."); })
        .catch(() => { res.send("Problem during deletion.."); });
});

// Starting the server
server.listen(4001, () => {
    console.log("Server listening at 4001....");
});
