const linearSearch = (arr: Array<number>, target: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 0, 4, 5, 8, 7, 6, 10], 10));
