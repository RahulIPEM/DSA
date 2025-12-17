var countDigits = function (num) {
    var count = 0;
    num = Math.abs(num);
    if (num === 0)
        count++;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
};
console.log(countDigits(-12));
