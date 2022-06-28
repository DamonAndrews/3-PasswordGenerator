//ALL DECLARED VARIABLES
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");



var resultsStr = '';
var charNums;
var finalPw = "";

const allchars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*"];


//ALL FUNCTIONS
// function charcountprompt() {
//   var userInputOne = prompt("Length of Password (Must be between 8 and 128 characters):", "8-128 Characters (# Only)")
//   if(userInputOne >= 8 && userInputOne <= 128) { 
//     userInputOne = lengthPw
//       lowercaseprompt()
//   } else { 
//       alert("You have made an invalid selection, please try again")
//       charcountprompt()
//       }
// }

function charcountprompt() {
  var prompt1 = prompt("Length of Password (Must be between 8 and 128 characters):", "8-128 Characters (# Only)")
  if(prompt1 >= 8 && prompt1 <= 128) { 
    charNums = prompt1;
      lowercaseprompt()
  } else { 
      alert("You have made an invalid selection, please try again")
      charcountprompt()
      }
}



console.log(charNums);
  
function lowercaseprompt() {
    var prompt2 = confirm("Do you want lowercase characters?")
    if(prompt2){
      resultsStr = resultsStr += allchars[0];
      uppercaseprompt()
  } else {
    alert("Your choice has been recorded, please note you will need to select Y for at least one of the next three options in order to avoid starting over");
    uppercaseprompt()
      }   
}

function uppercaseprompt() {
  var prompt3 = confirm("Do you want uppercase characters?")
    if(prompt3){
      resultsStr = resultsStr += allchars[1];
      numbercaseprompt()
}   else {
      numbercaseprompt()
      }   
}
       
function numbercaseprompt() {
  var prompt4 = confirm("Do you want numeric characters?")
    if(prompt4){
        resultsStr = resultsStr += allchars[2];
        specialcaseprompt()
}   else {
        specialcaseprompt()
        }
}

function specialcaseprompt() {
  var prompt5 = confirm("Do you want special characters?")
    if(prompt5){
      resultsStr = resultsStr += allchars[3];
        writePassword()
}  else {
        writePassword()
        }
}

function writePassword(lengthPw) {
  if (resultsStr == "") {
    lowercaseprompt()
  } else {

    for (i = 0; i < charNums; i++) {
      var newpw = Math.floor(Math.random() * resultsStr.length)
      finalPw += resultsStr[newpw]

  passwordText.value = finalPw;
}
  }}

generateBtn.addEventListener("click", charcountprompt)
