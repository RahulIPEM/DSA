const mergeSortedArray = (n1, m, n2, n) => {
	let p1 = m - 1;
	let p2 = n - 1;
	
	for (let i = m + n - 1; i >= 0; i--) {
		if (p2 < 0) {
			break;
		}
		
		if (p1 >= 0 && n1[p1] > n2[p2]) {
			n1[i] = n1[p1];
			p1--;
		} else {
			n1[i] = n2[p2]
			p2--;
		}
	}
	
	return n1;
}


console.log(mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3));