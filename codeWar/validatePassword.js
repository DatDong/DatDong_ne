// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

function password(str) {
  if (
    checkUppercaseLetter(str) == true &&
    checkLowerLetter(str) == true &&
    checkNumber(str) == true &&
    checkPassWordLength(str) == true
  ) {
    return true;
  }
  else
    return false;
}


function checkUppercaseLetter(character) {
    for(let i = 0 ; i<character.length;i++){
        if(character[i] >= "A" && character[i] <= "Z"){
            return true;
        }
    }
    return false;
  
}
function checkLowerLetter(character) {
    for(let i = 0 ; i<character.length;i++){
        if(character[i] >= "a" && character[i] <= "z"){
            return true;
        }
    }
    return false;

}
function checkNumber(number) {
    for(let i = 0 ; i<number.length;i++){
        if(number[i] >="0" && number[i] <="9"){
            return true;
        }
    }
    return false;

}
function checkPassWordLength(password) {
    if(password.length >= 8){
        return true
    }
    return false;
}

let str = "abcd1234";
console.log(password(str));