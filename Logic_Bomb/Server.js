// Created February 4th, 2024 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Node.js in Windows [ Node <path to file>\Server.js ]
// This script controls the web service in Node.js

// Define our constants, which rely on our Node.js web application framework Express, and our local port
const express = require('express');
const app = express();
const PORT = 3000;

// Selecting our framework Express for Node.js
app.use(express.json());

app.post('/login', (req, res) => {
    const { employeeID, password } = req.body;

    // Simulated authentication logic
    if (employeeID === "12345" && password === "password") {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(403).json({ message: "Access Denied" });
    }
});

app.listen(PORT, () => {
    console.log(`Mock Employee Portal running on http://localhost:${PORT}`);
});

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
