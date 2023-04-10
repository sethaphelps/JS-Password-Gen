var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Choose a password length between 8 and 128 character");
  if (isNaN(length)) {
    alert("Must choose a number");
    return null;
  }

  if (length < 8 || length > 128) {
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

  var letter = "abcdefghijklmnopqrstuvwxyz";
  var letterCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numb = "0123456789";
  var spec = "!@#$%&*.?";
  var chars = "";
  passwordText = "";

  if (lower) {
    chars += letter;
    passwordText += letter.charAt(Math.floor(Math.random() * letter.length));
  }

  if (upper) {
    chars += letterCap;
    passwordText += letterCap.charAt(
      Math.floor(Math.random() * letterCap.length)
    );
  }

  if (number) {
    chars += numb;
    passwordText += numb.charAt(Math.floor(Math.random() * numb.length));
  }

  if (special) {
    chars += spec;
    passwordText += spec.charAt(Math.floor(Math.random() * spec.length));
  }

  for (var i = passwordText.length; i < length; i++) {
    passwordText += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return passwordText;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
