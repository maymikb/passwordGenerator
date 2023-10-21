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

  // ask if passowrd should include, upper, numbers or special
  var lowerCase = confirm("Can lower case characters be included in your password?");
  var upperCase = confirm("Can upper case characters be included in your password?");
  var numbers= confirm('Can numbers be included in your password?');
  var special= confirm('can special characters be included in your password?');

  console.log(lowerCase);
  console.log(upperCase);

  var choices = "";

  // depending on their answers, add the corresponding characters to the basket
  if(lowerCase == true) {
    choices = choices + lowercaseCharacters;
  }

  if(upperCase == true) {
    choices = choices + uppercaseCharacters;
  }

   if (numbers==true){
    choices=choices+ numericCharacters;
   }

   if (special==true){
    choices= choices + specialCharacters;
   }

  console.log(choices)


  var password = "";

  for(i = 0; i < passLength; i++) {
    var randomNum = Math.floor(Math.random() * choices.length);
    var randomChar = choices[randomNum];
  
    console.log(randomChar)
    password = password + randomChar;
  }

  console.log(password);




  return password;


}


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


 