const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const formDataRoutes = require('./routes/data'); // Importing the new route
const messagesRouter = require('./routes/messages');
const reviewRoutes = require('./routes/reviewRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connection();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for enabling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Setting up routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/data', formDataRoutes); // Using the new form data route
app.use('/api/messages', messagesRouter);
app.use('/api', reviewRoutes);

app.get("/", (req, res) => {
    res.status(200).json("Server started");
    
});

// Starting the server
const PORT = process.env.PORT || 1221;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});