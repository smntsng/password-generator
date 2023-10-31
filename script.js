// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

var pwArray = [];
var pwLength = 0;


function getPasswordOptions() {
while (true) {
  pwLength = prompt("Choose a password length of at least 8 characters but no more than 128.");

  if (!isNaN(pwLength) && pwLength >= 8 && pwLength <= 128 || false) {
    console.log(pwLength);
    break; 
  } else {
    alert("Please choose a password length of at least 8 characters but no more than 128.");
  }
};


    // Proceed with the rest of your code for generating a password
    if(confirm("Would you like to use lower case characters?")){
      pwArray = pwArray.concat(lowerCasedCharacters);
    }
    if(confirm("Would you like to use upper case characters?")){
      pwArray = pwArray.concat(upperCasedCharacters);
    }
    if(confirm("Would you like to use numeric characters?")){
      pwArray = pwArray.concat(numericCharacters);
    }
    if(confirm("Would you like to use special case characters?")){
      pwArray = pwArray.concat(specialCharacters);
    }
    break;
    console.log(pwArray)

    if (pwArray.length === 0) {
      alert("Please select at least one character type.");

      return pwArray;
     
}
}



// Function for getting a random element from an array

function getRandom() {
  var pw = "";
  for (var i = 0; i < pwLength; i++) {
    var arrayIndex = Math.floor(Math.random() * pwArray.length);
    pw += pwArray[arrayIndex];
  }

  return pw;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();     
  var password = getRandom();   
  return password;     
}

generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);