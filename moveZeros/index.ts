const moveZeros = (nums: Array<number>): Array<number> => {
	let nonZeroIndex = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			const temp = nums[i]
			nums[i] = nums[nonZeroIndex];
			nums[nonZeroIndex] = temp;
			nonZeroIndex++;
		}
	}
	return nums;
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([-1,0,0,1,0])) //[-1,1,0,0,0]