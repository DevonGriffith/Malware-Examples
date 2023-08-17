// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\Reflected_XSS_JavaScript.js ]
// Reflected XXS = Crafted URLs being executed in the user's browser

// Example URL: http://example.com/page?input=<script>alert('Reflected XSS')</script>, 

<script>
  var userInput = decodeURIComponent(window.location.search.slice(7));
  document.write('Hacked, ' + userInput);
</script>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
