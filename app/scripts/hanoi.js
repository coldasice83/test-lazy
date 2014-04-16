function hanoiMove(num, a, b, c) {
	$('h3').text('Completed count : '+count+'');
	if(num == 1) {
		console.log('Frisbee '+num+' move '+a+' --> '+c+'');

	} else {
		hanoiMove(num-1, a, c, b);
		console.log('Frisbee '+num+' move '+a+' --> '+c);
		hanoiMove(num-1, b, a, c);
	}
	count++;
}
var count=0;
hanoiMove(3, 'A', 'B', 'C');

