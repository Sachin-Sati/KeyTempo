const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
require('dotenv').config();

// Initialize Express App
const app = express();

// Initialize PORT
const PORT = process.env.PORT || 5000;

// Listen for Incoming Requests
app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT http://localhost:${PORT}`);
})

// Establish Connection
connectDB();

// Middlewares
app.use(cors({              
    origin: 'http://localhost:5173',    // accept request from frontend
    credentials: true
}));             
app.use(express.json());        // parses json data

// User Routes
app.use('/api', userRoutes);

// Serve Frontend in production environment
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'frontend/dist')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', "frontend", "dist", "index.html"));
    });
}  