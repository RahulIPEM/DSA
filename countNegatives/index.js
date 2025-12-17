function countNegatives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
console.log(countNegatives([2, 9, 17, 0, 1, 10, 4, 8]));
