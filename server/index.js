const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");

const app = express();
const router = require("./routes/userRoute.js");

app.use(express.json());

// Configure CORS
app.use(cors());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// Use the router
app.use(router);

// Connect to MongoDB Atlas
mongoose.connect(
    "",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Other options if needed
    }
)
.then(() => {
    console.log(`Connected to the database`.bgCyan.white);
    // Start the server after successful database connection
    app.listen(5001, () => console.log("Server started"));
})
.catch(error => {
    console.error(`Error connecting to the database: ${error}`.bgRed);
});

// Handle unexpected errors
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', error => {
    console.error('Uncaught Exception:', error);
    process.exit(1); // Exit with a non-zero status code
});
