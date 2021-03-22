
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

/* Declase passwordLength variable and propmt user for length of password and criteria for random password generation */
var passwordLength = 0;

function askUser(passwordLength) {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a length between 8 and 128 characters");
  }
  userLowerCase = confirm ("Are you using lower case?");
  userUpperCase = confirm ("Should we add upper case?");
  userNumeric = confirm ("What about we include numeric characters?");
  userSpecialCharacters = confirm ("Any special characters?");
}

 //Variables declared for each password criteria
function validateAnswers() {
  var chars = "";
    if (userLowerCase == true) {
    chars += "qwertyuiopasdfghjklzxcvbnm";
  }
      if (userUpperCase == true) {
      chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
      if (userNumeric == true) {
        chars += "1234567890";
      }
        if (userSpecialCharacters == true) {
          chars += "~!@#$%^&*()_-=;',./|\+|}{:?><`"
        }
        if (userLowerCase == false && userUpperCase == false && userNumeric == false && userSpecialCharacters == false) {
          alert ("You must select criteria to create a password")
          askUser();
        }
        return chars;
}

// Function generatePassword select at random characters, multiplies by the length and adds/concatenates random characters
function generatePassword(){
  var password = "";
  var passwordLength = window.prompt("Please enter the legnth of the desired password. It must be between 8 and 128 characters long");
  askUser(passwordLength);
  var chars = validateAnswers();
  console.log(chars);
  console.log(passwordLength);
  for (i = 0; i < passwordLength; i++) {
    var randomCharacters = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomCharacters,randomCharacters+1);
    }
  return password;
}}


// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);

