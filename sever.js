const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML page)
app.use(express.static('public'));

// Dummy user data for demonstration
const users = {
    'user@example.com': 'password123'
};

// Handle login POST request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists and password matches
    if (users[email] && users[email] === password) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid email or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});