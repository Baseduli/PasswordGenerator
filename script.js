// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?",];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var passwordLength = window.prompt("Pick password length between 8 and 128");

  if(passwordLength >= 8 && passwordLength <= 128) {
    var password = "";
    var includesChar = [];

    var specialCharacters = window.confirm("Special Characters?");
    var upperCase = window.confirm("Uppercase letters?");
    var lowerCase = window.confirm("Lowercase letters?");
    var numbers = window.confirm("numbers?");
   if (specialCharacters) {
    includesChar = includesChar.concat(specialCharactersArray);
  } if (upperCase) {
    includesChar = includesChar.concat(upperCaseArray);
  } if (lowerCase) {
    includesChar = includesChar.concat(lowerCaseArray);
  } if (numbers) {
    includesChar = includesChar.concat(numbersArray);
  }

  for(var i = 0; i <passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * includesChar.length);
    password += includesChar[randomIndex];
  }
  return password;

} else {
  window.alert("Password length must be between 8 and 128");
  return;
}
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
