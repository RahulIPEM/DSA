var selectionSort = function (nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        var temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
    return nums;
};
console.log(selectionSort([7, 1, 5, 4, 3, 2]));
