function isPalindrome(str: string | number): boolean {
    // Convert number to string if needed
    const input = String(str);
    
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    let left = 0;
    let right = cleaned.length - 1;
    
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