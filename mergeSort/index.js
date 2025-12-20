var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mergeSort = function (nums) {
    if (nums.length <= 1)
        return nums;
    var mid = nums.length / 2;
    var left = mergeSort(nums.slice(0, mid));
    var right = mergeSort(nums.slice(mid));
    return merge(left, right);
};
var merge = function (left, right) {
    var mergedArr = [];
    var p1 = 0;
    var p2 = 0;
    while (p1 < left.length && p2 < right.length) {
        if (left[p1] < right[p2]) {
            mergedArr.push(left[p1]);
            p1++;
        }
        else {
            mergedArr.push(right[p2]);
            p2++;
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], mergedArr, true), left.slice(p1), true), right.slice(p2), true);
};
console.log(mergeSort([5, 2, 6, 4, 3, 1]));
