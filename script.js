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


// function to generate password according to user's input
function generatePassword() {
  var passwordLength = passwordLengthVerify();
  var characterType = characterTypeVerify();
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = getRandomCharacter(characterType);
    password += randomCharacter;
  }
  return password;
}


// Verify password length
function passwordLengthVerify() {
    var characterLength = Number(window.prompt("Please chose the length of your password. (8-128)"));
    if(characterLength === "" || characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
      alert("Please enter a number between 8 and 128");
      passwordLengthVerify()
    }
    return characterLength;
  }

  // Verify character type
function characterTypeVerify() {
  var characterType = [];
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");
  if(lowercase === true) {
    characterType.push("lowercase");
  }
  if(uppercase === true) {
    characterType.push("uppercase");
  }
  if(numeric === true) {
    characterType.push("numeric");
  }
  if(special === true) {
    characterType.push("special");
  }
  if(characterType.length === 0) {
    alert("Please chose at least one character type");
    characterTypeVerify();
  }
  return characterType;
}


function getRandomCharacter(characterType) {
  var characterSet = "";
  if(characterType.includes("lowercase")) {
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    characterSet = characterSet.concat(lowercaseCharacters);
  }
  if(characterType.includes("uppercase")) {
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characterSet = characterSet.concat(uppercaseCharacters);
  }
  if(characterType.includes("numeric")) {
    var numericCharacters = "0123456789";
    characterSet = characterSet.concat(numericCharacters);
  }
  if(characterType.includes("special")) {
    var specialCharacters = "!@#$%^&*()_+";
    characterSet = characterSet.concat(specialCharacters);
  }
  
  var randomCharacter = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  
  return randomCharacter;
}