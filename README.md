# MERN Product Management System

A full-stack CRUD application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage products efficiently.

## Features

- Create, Read, Update, and Delete product entries.
- Backend RESTful APIs built with Express.js and Node.js.
- MongoDB database with Mongoose for persistent data storage.
- Responsive frontend built with React for smooth user experience.
- Full-stack integration with seamless API communication.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Environment Variables:** dotenv

## Installation

1. Clone the repository:
    git clone https://github.com/safalpokharel/MernStack-Practice.git
    cd MernStack-Practice

2. Install backend dependencies:
    cd backend
    npm install

3. Install Frontend dependencies:
    cd frontend
    npm install

4. Create a .env file in the backend folder with the following content
    MONGO_URL=your_mongodb_connection_string
    PORT=3000   

## Running the Project

-- Backend:
    cd backend
    npm start

-- Frontend:
    cd frontend
    npm start
The application will be available at: http://localhost:3000

## Usage

1. Open the app in your browser.
2. Add new products using the frontend form.
3. View all products in a list.
4. Update or delete any product as needed.
5. Data is stored in MongoDB and persists across sessions.
