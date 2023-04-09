var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthpw = prompt("Choose a password length between 8 and 128 character");
  if (isNaN(lengthpw)) {
    alert("Must choose a number");
    return null;
  }

  if (lengthpw < 8 || lengthpw > 128) {
    alert("Must choose a number between 8 and 128");
    return null;
  }

  var lower = confirm("Would you like lowercase letters in your password?");
  var upper = confirm("Would you like uppercase letters in your password?");
  var number = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");

  if (!lower && !upper && !number && !special) {
    alert("You must have at least 1 character type.");
    return null;
  }

  var letter = "abcdefghijklmnopqrstuvwxyz".split("");
  var letterCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numb = "0123456789".split("");
  var spec = "!@#$%&*.?".split("");
  var chars = [];
  var result = [];

  if (lower) {
    chars = chars.concat(letter);
  }

  if (upper) {
    chars = chars.concat(letterCap);
  }

  if (number) {
    chars = chars.concat(numb);
  }

  if (special) {
    chars = chars.concat(spec);
  }

  for (var i = 0; i < lengthpw; i++) {
    var element = chars[i];
    console.log(element);
    result.push(element);
  }

  return result.join("");
}

function getRandomChar(arr = []) {
  var random = Math.floor(Math.random() * arr.length);
  // stuck here - need to access the array
  var char = [];
  return char;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
