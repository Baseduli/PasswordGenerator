// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?",];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePassword() {

  var passwordLength = window.prompt("Pick password length between 8 and 128");
  var specialCharacters = window.confirm("Special Characters?");
  var upperCase = window.confirm("Uppercase letters?");
  var lowerCase = window.confirm("Lowercase letters?");

  if (passwordLength >= 8 && passwordLength <= 128) {

  } else if {
    window.alert("Invalid password length! Please pick a password length between 8 and 128");
  }

  return "";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*var generateBtn = document.querySelector("#generate");
var specialCharsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  var passwordLength = promptPasswordLength();

  if (passwordLength) {
    var includeSpecialChars = confirm("Include special characters?");
    var includeUpperCase = confirm("Include uppercase letters?");
    var includeLowerCase = confirm("Include lowercase letters?");

    if (!includeSpecialChars && !includeUpperCase && !includeLowerCase) {
      alert("You must select at least one character type.");
      return "";
    }

    var validChars = [];
    if (includeSpecialChars) {
      validChars = validChars.concat(specialCharsArray);
    }
    if (includeUpperCase) {
      validChars = validChars.concat(upperCaseArray);
    }
    if (includeLowerCase) {
      validChars = validChars.concat(lowerCaseArray);
    }

    var password = generateRandomPassword(validChars, passwordLength);
    return password;
  } else {
    alert("Invalid password length! Please pick a password length between 8 and 128.");
    return "";
  }
}

function promptPasswordLength() {
  var passwordLength = parseInt(prompt("Pick a password length between 8 and 128"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return null;
  }

  return passwordLength;
}

function generateRandomPassword(validChars, passwordLength) {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); */  1
