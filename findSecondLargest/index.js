function findSecondLargest(nums) {
    if (nums.length < 2) {
        return null;
    }
    var _largest = -Infinity;
    var _secondLargest = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > _largest) {
            _secondLargest = _largest;
            _largest = nums[i];
        }
        else if (nums[i] > _secondLargest) {
            _secondLargest = nums[i];
        }
    }
    return _secondLargest;
}
console.log(findSecondLargest([1, 0, -2, -1]));
