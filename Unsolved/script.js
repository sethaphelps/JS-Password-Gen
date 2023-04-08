// Assignment Code
var generateBtn = document.querySelector("#generate");

// function for password generation
function generatePassword() {
  var length = prompt("Choose a password length between 8 and 128 character");
  if (isNaN(length)) {
    // alert if other character is chosen instead of number
    alert("Must choose a number");
    return null;
  }
  // alert for incorrect character amount
  if (length < 8 || length > 128) {
    alert("Must choose a number between 8 and 128");
    return null;
  }

  // questions for user
  var lower = confirm("Would you like lowercase letters in your password?");
  var upper = confirm("Would you like uppercase letters in your password?");
  var number = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");

  if (!lower && !upper && !number && !special) {
    alert("You must have at least 1 character type.");
    return null;
  }

  // variables for password
  var letter = "abcdefghijklmnopqrstuvwxyz";
  var letterCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numb = "0123456789";
  var spec = "!@#$%&*.?";
  var containLow = false;
  var containUp = false;
  var containNum = false;
  var containSpec = false;
  passwordText = "";
  var conf = "";

  // if statements confirming chosen characters for password
  if (lower) {
    conf += letter;
  }

  if (upper) {
    conf += letterCap;
  }

  if (number) {
    conf += numb;
  }

  if (special) {
    conf += spec;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
