// Created August 16th, 2023 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ Node <path to file>\XSS_via_Form_Fields_JavaScript.js ]
// XSS via Form Fields = attacker can input a script, which will be executed when the page is loaded.

<form action="#">
  <input type="text" id="input">  // This is where we should sanitize input to prevent XXS injection
  <button type="submit">Submit</button>
</form>
<script>
  var userInput = document.getElementById('input').value;  // Get the script that was entered into the text Form Field
  document.write('You entered: ' + userInput);  // Our harmless script just prints text, but we can do anything
</script>

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
