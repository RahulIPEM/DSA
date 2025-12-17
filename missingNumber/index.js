var missingNumber = function (nums) {
    var n = nums.length;
    var totalSum = (n * (n + 1)) / 2;
    var partialSum = 0;
    for (var i = 0; i < n; i++) {
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
};
console.log(missingNumber([3, 0, 1]));
