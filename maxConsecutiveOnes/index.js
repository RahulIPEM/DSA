var maxConsecutiveOnes = function (nums) {
    var maxOnes = 0;
    var currentMaxOnes = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentMaxOnes++;
        }
        else {
            currentMaxOnes = 0;
        }
        maxOnes = maxOnes > currentMaxOnes ? maxOnes : currentMaxOnes;
    }
    return maxOnes;
};
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
