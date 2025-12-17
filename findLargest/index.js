function findLargest(arr) {
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([5, 0, 7, 10, 8, 17, 1]));
