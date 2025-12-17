function searchElement(arr, num) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
            break;
        }
    }
    return index;
}
console.log(searchElement([1, 2, 3, 4, 5, 6, 7], 4));
console.log(searchElement([1, 2, 3, 4, 5, 6, 7], 8));
console.log(searchElement([1, 2, 3, 4, 5, 6, 7], 2));
console.log(searchElement([1, 2, 3, 4, 5, 6, 7], 6));
