function findSmallest(arr) {
    var smallest = Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallest([5, 0, 7, 10, 8, 17, 1]));
