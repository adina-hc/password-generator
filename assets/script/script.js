
// Assign the HTML id of the Generate Password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
/* Prompt user for password length and criteria for random password generation */

//var passwordLength = 0;

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
  while (userLowerCase == false && userUpperCase == false && userNumeric == false && userSpecialCharacters == false) {
    alert ("You must select at least one criteria to create a password")
    askUser();
  } 
  var chars = "";
    if (userLowerCase == true) {
      alert ("You chose to include lower case characters");
      chars += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (userUpperCase == true) {
      alert ("You chose to include upper case characters");
      chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (userNumeric == true) {
      alert ("You chose to include numeric characters");
      chars += "1234567890";
    }    
    if (userSpecialCharacters == true) {
    alert ("You chose to include special characters");
      chars += "~!@#$%^&*()_-=;',./|\+|}{:?><`";
    }
    return chars;
}

// Function generatePassword select at random characters, multiplies by the length and concatenates random characters
function generatePassword(){
  var password = "";
  var passwordLength = window.prompt("Please enter the length of the desired password. It must be between 8 and 128 characters long");
  askUser(passwordLength);
  console.log(passwordLength);
  var chars = validateAnswers();
  for (i = 0; i < passwordLength; i++) {
    var randomCharacters = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomCharacters,randomCharacters+1);
    }
  return password;
  console.log(password);
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);

