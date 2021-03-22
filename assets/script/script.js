
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

/* Propmt user for length of password and criteria for random password generation */
var passwordLenth = 0;
var passwordLength = window.prompt("Please enter the legnth of the desired password. It must be between 8 and 128 characters long");

function askUser() {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a length between 8 and 128 characters");
  }
  userLowerCase = confirm ("Are you using lower case?");
  userUpperCase = confirm ("Should we add upper case?");
  userNumeric = confirm ("What about we include numeric characters?");
  userSpecialCharacters = confirm ("Any special characters?");
  console.log(passwordLength);
}

 //Variables declared for each password criteria
function validateAnswers() {
  if (userLowerCase == true) {
    var chars = "qwertyuiopasdfghjklzxcvbnm";
  }
    if (userUpperCase == true) {
      var chars = chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
      if (userNumeric == true) {
        var chars = chars += "1234567890";
      }
        if (userSpecialCharacters == true) {
          var chars = chars += "~!@#$%^&*()_-=;',./|\+|}{:?><`"
        }
        if (userLowerCase == false && userUpperCase == false && userNumeric == false && userSpecialCharacters == false) {
          alert ("You must select criteria to create a password")
          askUser();
        }
}

// Function generatePassword select at random characters, multiplies by the length and adds/concatenates random characters
function generatePassword(){
  askUser();
  validateAnswers();
  for (i = 0, i < passwordLength; i ++;) {
    var randomCharacters = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomCharacters,randomCharacters+1);
  }
  return randomCharacters;
}}
console.log(password)

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);

