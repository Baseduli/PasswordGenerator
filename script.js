// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passwordLength, specialCharacters, upperCase, lowerCase) {
  console.log("Click");
  var passwordLength = window.prompt("Pick password length between 8 and 128");
  var specialCharacters = window.confirm("Special Characters?");
  var upperCase = window.confirm("Uppercase letters?");
  var lowerCase = window.confirm("Lowercase letters?");

  return "Generated password here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
