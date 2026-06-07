let palindrome = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
let notPalindrome = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1]

console.log(`is that '${palindrome}' a plindrome? ${isPalindrome(palindrome)}`);
console.log(`is that '${notPalindrome}' a plindrome? ${isPalindrome(notPalindrome)}`);


function isPalindrome(arr) {
    for (let index = 0; index < arr.length / 2; index++) {
        console.log(`${index}:${arr[index]}, ${arr.length - 1 - index}:${arr[arr.length - 1 - index]}`);

        if (arr[index] != arr[arr.length - 1 - index]) return false
    }

    return true
}