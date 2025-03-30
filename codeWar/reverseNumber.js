function reverseNumber (num) {
    let numStr = num.toString();
    let reversedStr = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    let reversedNum = parseInt(reversedStr, 10);
    if(numStr<0){
        return -reversedNum;

    }
    else{
        return reversedNum;
    }
}

let num = -123456789;
let reversedNum = reverseNumber (num);

console.log(reversedNum);