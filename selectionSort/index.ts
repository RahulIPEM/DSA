const selectionSort = (nums: Array<number>): Array<number> => {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
};

console.log(selectionSort([7, 1, 5, 4, 3, 2]));
