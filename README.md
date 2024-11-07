# MERN Machine Test Project

**Reference**: Application for 6-Month MERN Developer Internship at Dealsdray Online Pvt. Ltd.  
**Location**: Bangalore, Whitefield (Work from Office)

This repository contains the completed MERN stack project for the technical assessment. The project demonstrates proficiency in MongoDB, Express, React, and Node.js, following industry best practices in full-stack web development.

## 🚀 Project Overview

This project is a fully functional MERN application that includes a backend API developed with Node.js and Express, along with a frontend user interface built using React. It features CRUD operations, state management, and RESTful API integration.

## 🛠️ Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios (for API requests)

## 📂 Folder Structure

- **frontend/**: Contains the React-based user interface
- **backend/**: Contains the Node.js and Express backend, with API routes and controllers

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local instance that is MongoDB Compass)

## 🔧 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Environment Variables**:
   - Create a `.env` file in the backend directory with the following:
     ```plaintext
     MONGO_URI=localhost:27017
     PORT=27017
     ```

## 🖥️ Running the Application

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Start the React app:
   ```bash
   npm start
   ```
3. Access the app at `http://localhost:3000`.

### Backend
1. Open a separate terminal.
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
4. The backend will run at `http://localhost:4001`.

## 🌐 API Endpoints

Here’s a quick summary of the main API endpoints:

- **GET /api/items** - Retrieve all items
- **POST /api/items** - Add a new item
- **PUT /api/items/:id** - Update an existing item
- **DELETE /api/items/:id** - Delete an item

## 📌 Features

- **Full CRUD Functionality**: Perform create, read, update, and delete operations.
- **Responsive Design**: Optimized for various screen sizes.
- **API Integration**: Seamless interaction between frontend and backend.

## 🤝 Contributing

If you'd like to contribute to this project, please fork the repository and make any updates or improvements.
