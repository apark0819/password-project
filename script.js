// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

//var Arrays
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];
var passwordLength = "";
var passwordLower;
var passwordUpper;
var passwordNumbers;
var passwordSpecial;

function generatePassword (){
    var passwordLength = prompt("# of characters");
    if (passwordLength <= 7 || password >= 128) {
        alert("Your password must be between 8 - 128 characters.");
        var passwordLength = prompt("How many characters would you like your password to contain?");
        }
    //password options     
    var passwordLower = confirm("Would you like to add lowercase alphabets into your password?");
    var passwordUpper = confirm("Would you like to add an uppercase alphabets into your password?");
    var passwordNumbers = confirm("Would you like to add numbers into your password?");
    var passwordSpecial = confirm("Would you like to add a special characters into your password?");
    //restarts the questions
    if (passwordLower === false && passwordUpper === false && passwordNumbers === false & passwordSpecial === false) {
        alert("You must choose at least one of the options to continue. Please generate a new password.")
    }
    var password = []
    if (passwordLower) {
        passwordCharacters = passwordCharacters.concat(passwordLower);
      }
    if (passwordUpper) {
        password = password.concat(passwordUpper);
      }
        
    if (passwordNumbers) {
        password = password.concat(passwordNumbers);
      }
  
    if (passwordSpecial) {
        password = password.concat(passwordSpecial);
      }
    console.log(password);
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);