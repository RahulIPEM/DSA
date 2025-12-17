function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var left = 0;
    var right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
