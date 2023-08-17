// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\XSS_via_URL_Parameters_JavaScript.js ]
// XSS via URL Parameters = when an attacker crafts a URL with a malicious script as a parameter,
// the script will be executed when the page loads

<script>
  var userInput = decodeURIComponent(window.location.search.slice(7));
  document.write('You entered: ' + userInput);
</script>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
