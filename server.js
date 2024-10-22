const path = require('path');
const express = require('express'); // "require" the Express module
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 8080; // assign a port

// start the server on the port and output a confirmation to the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

// middleware to serve static files from the "public" directory
app.use(express.static('public'));

// route to serve the "home.html" file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html')); // Ensure this path is correct
});

// route to send text for the "/about" page
app.get('/about', (req, res) => {
    res.send('About the Company');
});

// fallback route
app.get('*', (req, res) => {
    res.status(404).send('404 - Page Not Found');
});
