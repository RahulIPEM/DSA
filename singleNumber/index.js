const singleNumber = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};
const singleNumberByObj = (nums) => {
    const numObj = {};
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        if (numObj[nums[i]]) {
            numObj[nums[i]] += 1;
        }
        else {
            numObj[nums[i]] = 1;
        }
    }
    console.log(numObj);
    for (let [key, count] of Object.entries(numObj)) {
        if (count === 1) {
            num = parseInt(key);
        }
    }
    return num;
};
console.log(singleNumberByObj([4, 1, 2, 1, 2])); //4
console.log(singleNumberByObj([2, 2, 1])); //1
