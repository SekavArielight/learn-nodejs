const express = require('express');

const app = express();

// Simple middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route handler
};

// Use the middleware
app.use(loggerMiddleware);

// Example route
app.get('/', (req, res) => {
    res.send('Hello, Middleware!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});