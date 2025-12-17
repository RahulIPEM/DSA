const sumOfArrayElement = (nums: Array<number>): number => {
	if (nums.length === 1) return nums[nums.length - 1];
	return nums[nums.length - 1] + sumOfArrayElement(nums.splice(0, nums.length - 1))
}

// console.log(sumOfArrayElement([2,1,3,6,5,4]))


const sumOfOddElementOfArray = (nums: Array<number>): number => {
	const n = nums.length;
	const isOdd = (nums[n - 1]) % 2 !== 0;
	if (n == 1) {
		if (isOdd) return nums[n - 1];
		else return 0;
	} else {
		if (isOdd) {
			return nums[n - 1] + sumOfOddElementOfArray(nums.splice(0, n - 1));
		} else {
			return 0 + sumOfOddElementOfArray(nums.splice(0, n - 1));
		}
	}
}

console.log(sumOfOddElementOfArray([5,2,0,3,6,7,3]))