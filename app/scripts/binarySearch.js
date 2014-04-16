function bSearch(search) {
	console.log(arr+' '+search);

	var count = 0;
	var first = 0;
	var last = arr.length-1;
	var mid;
	var diff = 0;
	while (first <= last) {
		console.log(first + " " + last  + " search count :" + (++count));
		mid = Math.floor((first + last) / 2);
		if (arr[mid] == search) return mid;
		else {
			if (search < arr[mid]) last = mid - diff;
			else first = mid + diff;
		}

		if (count > 10) return 'over flow';

	}
	return 'search failed';
}

var arr = [1, 2, 3, 4, 7, 9, 12];
var result = bSearch(11); 
console.log('search result : ' + result);