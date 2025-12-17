function reverse(x: number): number {
    const INT_MIN = Math.pow(-2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    let reversed = 0;
    let num = Math.abs(x);
    
    while (num !== 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);
        
        // Check for overflow before adding the digit
        if (reversed > Math.floor(INT_MAX / 10) || 
                (reversed === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        
        reversed = reversed * 10 + digit;
    }
    
    reversed = x < 0 ? -reversed : reversed;
    
    return reversed;
}
// Test cases
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0 (overflow)