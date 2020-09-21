// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var numeric = "0123456789";
  var special = "!@#$%^&*";
  var password = "";
  var characters = "";
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    let passwordLengthStr = prompt(
      "How long do you want the password to be? \nMin of 8, max of 128."
    );
    passwordLength = Number(passwordLengthStr);
  }
  while (characters.length === 0) {
    if (confirm("Shall I include lowercase letters?")) {
      characters += lowerCase;
    }
    if (confirm("Shall I include uppercase letters?")) {
      characters += upperCase;
    }
    if (confirm("Shall I include numbers?")) {
      characters += numeric;
    }
    if (confirm("Shall I include special characters?")) {
      characters += special;
    }
  }
  for (let i = 0; i < passwordLength; i++) {
    let randIndex = Math.floor(Math.random() * characters.length);
    password += characters[randIndex];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
