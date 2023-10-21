// Assignment code here
var lowercaseCharacters='abcdefghijklmnopqrstuvwxyz';
var uppercaseCharacters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericCharacters='0123456789';
var specialCharacters='"!"#$%&*+,-./:;<=>?@\^_`{|}~()"'

function generatePassword() {
  var passLength = prompt("What is the length of your password? (8-128)");

  if(passLength < 8) {
    alert("Cannot be less than 8!!");
    return;
  }else if(passLength >128){
    alert("Cannot be more than 128!!");
    return;
    
  }

  // ask if they want lower, upper, numbers or special
  var lowerCase = confirm("Can lower case characters be included in your password?");
  var upperCase = confirm("Can upper case characters be included in your password?");
  var numbers= confirm('Can numbers be included in your password?');
  var special= confirm('can special characters be included in your password?');

  console.log(lowerCase);
  console.log(upperCase);

  var basket = "";

  // depending on their answers, add the corresponding characters to the basket
  if(lowerCase == true) {
    basket = basket + lowercaseCharacters;
  }

  if(upperCase == true) {
    basket = basket + uppercaseCharacters;
  }

   if (numbers==true){
    basket=basket+ numericCharacters;
   }

   if (special==true){
    basket= basket + specialCharacters;
   }

  console.log(basket)


  var password = "";

  for(i = 0; i < passLength; i++) {
    var randomNum = Math.floor(Math.random() * basket.length);
    var randomChar = basket[randomNum];
  
    console.log(randomChar)
    password = password + randomChar;
  }

  console.log(password);




  return password;


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


 