const insertionSort = (nums: Array<number>): Array<number> => {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = i - 1;

    while (nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = curr;
  }
  return nums;
};

console.log(insertionSort([5, 3, 6, 2, 4, 1]));
