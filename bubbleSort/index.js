var bubbleSort = function (nums) {
    var n = nums.length;
    var loopCount = 0;
    for (var i = 0; i < n - 1; i++) {
        var isSwapped = false;
        for (var j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                isSwapped = true;
            }
        }
        loopCount++;
        if (!isSwapped)
            break;
    }
    console.log("loop iterated: ", loopCount);
    return nums;
};
console.log(bubbleSort([5, 2, 4, 1]));
console.log(bubbleSort([1, 2, 3, 4]));
