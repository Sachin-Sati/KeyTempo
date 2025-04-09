const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Initialize Express App
const app = express();

// Establish Connection
connectDB();

// Middlewares
app.use(cors());                // allow requests from all origins
app.use(express.json());        // parses json data
app.use('/', userRoutes);       // user routes

// Listen for Incoming Requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT http://localhost:${PORT}`);
})