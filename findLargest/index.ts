function findLargest(arr: Array<number>): number {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findLargest([5, 0, 7, 10, 8, 17, 1]));