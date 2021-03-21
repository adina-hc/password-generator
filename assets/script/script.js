
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);

/* Propmt user for length of password and criteria for random password generation */
function askUser() {
var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter length of desired password. It must be between 8 and 128 characters long");
  }
  userLowerCase = confirm ("Are you using lower case?");
  userUpperCase = confirm ("Should we add upper case?");
  userNumeric = confirm ("What about we include numeric characters?");
  userSpecialCharacters = confirm ("Any special characters?");
}

 //Variables declared for each password criteria
function validateAnswers() {
  if (userLowerCase.isTrue) {
    var chars = "qwertyuiopasdfghjklzxcvbnm";
  }
    if (userUpperCase.isTrue) {
      var chars = chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
      if (userNumeric.isTrue) {
        var chars = chars += "1234567890";
      }
        if (userSpecialCharacters.isTrue) {
          var chars = chars += "~!@#$%^&*()_-=;',./|\+|}{:?><`"
        }
  else {
    askUser();
    }
}

console.log(chars)

// Function generatePassword select at random characters, multiplies by the length and adds/concatenates random characters
function generatePassword(){
  for (var i=0, i < passwordLength; i ++) {
    var randomCharacters = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomCharacters,randomCharacters+1);
  }
}
