// Assignment code here
var lowercaseCharacters=['abcdefghijklmnopqrstuvwxyz'];
var uppercaseCharacters=['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
//* var specialCharacters=['" !"#$%&*+,-./:;<=>?@\^_`{|}~"']
//do i put the line above here? should chars include () and []?
var numericCharacters=['0123456789'];

function generatePassword() {
  var passLength = prompt("What is the length of your password? (8-128)");

  if(passLength < 8) {
    alert("Cannot be less than 8!!");
    return;
  }else if(passLength >128){
    alert("Cannot be more than 128!!");
    return;
    
  }
}



// function generatePassword2() {
//   var lowerCase = prompt("Can lower case characters be included in your password?");
//   //if true OR if false, move to the next question
  
//   if true [& if false] return;
// }
// //could I use if (password.includes?) for the characters?

// function generatePassword3() {
//   var upperCase = prompt("Can upper case characters be included in your password?");
//   if ("yes")
//   return; }
// else return; 

// function generatePassword4() {
//   var specialCharacters = prompt("Can special characters characters be included in your password?");
//   if ("yes")
//   return; }
// else return; 

//....OR...INSTEAD...
//answer each question individually or bginr them up wiht 'yes' no answers?








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 