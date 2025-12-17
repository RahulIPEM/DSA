function findSmallest(arr: Array<number>): number {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

console.log(findSmallest([5, 0, 7, 10, 8, 17, 1]));