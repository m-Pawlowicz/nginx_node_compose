const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const os = require("os");
const morgan = require('morgan');

app.use(morgan('combined'));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.write(os.hostname() + "\n")
    res.write("abcdef" + "\n")
    res.end();
});

app.get('/admin', (req, res) => {
    res.send('hello from admin');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});