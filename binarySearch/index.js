var binarySearch = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (right >= left) {
        var middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] < target) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return -1;
};
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
