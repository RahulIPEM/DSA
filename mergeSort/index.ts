const mergeSort = (nums: Array<number>): Array<number> => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
};

const merge = (left: Array<number>, right: Array<number>): Array<number> => {
  const mergedArr = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      mergedArr.push(left[p1]);
      p1++;
    } else {
      mergedArr.push(right[p2]);
      p2++;
    }
  }

  return [...mergedArr, ...left.slice(p1), ...right.slice(p2)];
};

console.log(mergeSort([5, 2, 6, 4, 3, 1]));
