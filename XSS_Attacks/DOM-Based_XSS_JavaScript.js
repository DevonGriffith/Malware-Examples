// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\DOM-Based_XSS_JavaScript.js ]
// DOM-Based XXS = If an attacker manipulates the input to include a script, the script gets executed when the button is clicked

<button id="btn">Click me</button>
<script>
  document.getElementById('btn').addEventListener('click', function() {
    var userInput = document.getElementById('input').value;
    document.write('Hacked, ' + userInput);
  });
</script>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
