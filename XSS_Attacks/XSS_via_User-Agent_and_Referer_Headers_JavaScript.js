// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\XSS_via_User-Agent_and_Referer_Headers_JavaScript.js ]
// XSS via User-Agent and Referer Headers = This script retrieves and displays the referring URL of the current page.
// If a victim accesses a page with this script then the attacker might be able to get browsing history

<script>
  var referrer = document.referrer;
  alert('Referrer: ' + referrer);
</script>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
