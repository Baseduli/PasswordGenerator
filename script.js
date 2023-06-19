window.alert("Let's create a password for you");
var passwordLength = window.prompt("Pick password length");
var specialCharacters = window.confirm("Special Characters?");
var upperCase = window.confirm("Uppercase letters?");
var lowerCase = window.confirm("Lowercase letters?");

//console.log(passwordLength);
//console.log(specialCharacters);
//console.log(upperCase);
//console.log(lowerCase);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);