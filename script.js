// Assignment code here





function generatePassword(){
  var passwordLength = window.prompt('How many characters would you like your new password to be? (8-128 characters)');
  console.log('passwordLength', passwordLength);
  
  var lowercaseConfirm = window.confirm('Would you like to include lowercase characters?');
  console.log('lowercaseConfirm',lowercaseConfirm);

  var uppercaseConfirm = window.confirm('Would you like to include uppercase characters?');
  console.log('uppercaseConfirm',uppercaseConfirm);

  var numericConfirm = window.confirm('Would you like to include numeric characters?');
  console.log('numericConfirm',numericConfirm);

  var specialConfirm = window.confirm('Would you like to include special characters?');
  console.log('specialConfirm',specialConfirm);

  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '1234567890';
  var special = '!@#$%^&*()';
  var characterBank = ''

  if (lowercaseConfirm === true){
    console.log('before', characterBank)
      characterBank = characterBank+lowercase
      console.log('after', characterBank)
  } 

  if(numericConfirm === true){
    console.log('before', characterBank)
      characterBank = characterBank+numeric
      console.log('after', characterBank);
  }

  if (uppercaseConfirm === true){
    console.log ('before', characterBank)
      characterBank = characterBank +uppercase  
      console.log('after', characterBank);
  }

  if (specialConfirm === true){
    console.log('before', characterBank)
      characterBank = characterBank + special 
      console.log('after', characterBank);
  }



  let password = "";

  for (let i = 0; i< passwordLength; i++){
      var random = Math.floor(Math.random() * characterBank.length);
    password = password + characterBank[random]
    console.log(characterBank[random]);
  }
  
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
generateBtn.addEventListener("click", writePassword)