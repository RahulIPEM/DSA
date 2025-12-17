const missingNumber = (nums: Array<number>): number => {
	const n = nums.length;
	const totalSum = (n * (n + 1))/2;
	
	let partialSum = 0;
	for (let i = 0; i < n; i++) {
		partialSum = partialSum + nums[i];
	}
	
	return totalSum - partialSum;
}

console.log(missingNumber([3,0,1]))