// random number function that takes limit as a input and then outputs a random number within the inputed limit
function random_number(limit) {
	return Math.floor(Math.random () * limit);
}

// taking the data and time
// let dataTime = new Date();

// just a testing
// let a = dataTime.getTime();
// console.log(a);
// let b;
// document.addEventListener("keypress", function(e) {
	// if (e.key == ' ') {
		// let dataTime_another = new Date();
		// b = dataTime_another.getTime();
		// console.log(b);
		// let result = b - a;

		// console.log("The time is " + result);
	// }
// })

function start_timer_here () {
	let value_this = new Date ();
	
	let a = value_this.getTime();
	
	return a;
}
