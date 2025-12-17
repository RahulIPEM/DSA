var merge = function(nums1, m, nums2, n) {
    // const nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    // while (p1 < m || p2 < n) {
    //     if (p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2])) {
    //         nums1[p1 + p2] = nums1Copy[p1];
    //         p1++;
    //     } else {
    //         nums1[p1 + p2] = nums2[p2];
    //         p2++;
    //     }
    // }

    for (let i = m + n - 1; i >= 0; i--) {
        
    }

    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
