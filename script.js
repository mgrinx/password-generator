// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+"];

function generatePassword() {
    // Prompt the user for each set of characters, loop through again if the user does not select any sets
    var chars = [];
    while (1) {
        if (confirm("Would you like your password to contain lowercase letters?")) {
            chars = chars.concat(alphabet);
        }
        if (confirm("Would you like your password to contain uppercase letters?")) {
            for (let i = 0; i < alphabet.length; i++) {
                chars = chars.concat(alphabet[i].toUpperCase());
            }
        }
        if (confirm("Would you like your password to contain numbers?")) {
            chars = chars.concat(numbers);
        }
        if (confirm("Would you like your password to contain symbols?")) {
            chars = chars.concat(symbols);
        }
        if (chars === []) {
            alert("You must choose at least 1 set of characters.");
            continue;
        }
        break;
    }

    // Ask the user how long to make the password
    var passwordLength = prompt("Enter password length (between 8 and 128):");
    while (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128.");
        passwordLength = prompt("Enter password length (between 8 and 128):");
    }
    // fix if user entered a decimal for some reason
    passwordLength = Math.floor(passwordLength);

    // Create the password
    var password = "";
    for (let i = 0; i <= passwordLength; i++) {
        password += chars[Math.floor(Math.random() * (chars.length))];
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
