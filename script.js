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
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*";
var passwordLength = 0;
while (passwordLength < 8 || passwordLength > 128) {
  let passwordLengthStr = prompt(
    "How long do you want the password to be? \nMin of 8, max of 128."
  );
  passwordLength = Number(passwordLengthStr);
}
