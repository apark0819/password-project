// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV" 
var specialchars = "~'!@#$%^&*()-_+=.?"


function generatePassword (){
    var passwordLength = prompt("# of characters");
    if (passwordLength < 8) {
        alert ("Password must have at least 8 characters.") 
    } else {
        if (passwordLength > 128) {
            alert("Password cannot be over 128 characters.")
        }
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