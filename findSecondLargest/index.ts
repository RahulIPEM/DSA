function findSecondLargest(nums: Array<number>): any {
  if (nums.length < 2) {
    return null;
  }
  let _largest = -Infinity;
  let _secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > _largest) {
      _secondLargest = _largest;
      _largest = nums[i];
    } else if (nums[i] > _secondLargest) {
      _secondLargest = nums[i];
    }
  }

  return _secondLargest;
}

console.log(findSecondLargest([1, 0, -2, -1]));
