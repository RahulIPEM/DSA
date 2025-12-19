var linearSearch = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};
console.log(linearSearch([1, 2, 3, 0, 4, 5, 8, 7, 6, 10], 10));
