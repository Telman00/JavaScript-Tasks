//Palindrome in JavaScript

function isPalindrome(num) {
    let j = num.length - 1
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] != num[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let num1 = "bir";
let num2 = "iki";
let num3 = "dörd";
 
console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));
