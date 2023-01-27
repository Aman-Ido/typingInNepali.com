// this file will be the main js file that will have all the important functions and executions
const heading_another = document.getElementById("heading_two");
const container_text_here = document.getElementById("container_text_here");


// grabbing the input bar
const user_input = document.getElementById("user_input");

const value = sessionStorage.getItem("words_");

// let string = [];

let string_another = "";
// for (let i = 0; i < value; i++) {
	// string.push(main_array[Math.floor(Math.random() * main_array.length)]);
	// string.push(main_array[random_number(main_array.length)]);
// }

// console.log(string.length);
// heading.innerText = string;

// looping random words from data.js to the string_another string
for (let i = 0; i < value; i++) {
	string_another += main_array[random_number(main_array.length)] + " ";
}

// setting the value of the heading_another same as the string_another
heading_another.innerText = string_another;

// just testing
// let value_value = Math.floor(Math.random() * 100);
// console.log(value_value);
// just testing
// this is tracker that will track the movement of the cursor or the progress of the user typing
let tracker = 0;
// this var is to track mistakes
let mistakes = 0;


// adding event listener to listen for inputs from the user
user_input.addEventListener("keypress", function(e) {
	// if the inputs from the user is correct to the index of the string_another value then it will just increament and move on
	// checking to see if the pressed button is backspace
	// if (e.code == 8) {
		// tracker--;
		// console.log("The value of tracker in backspace is " + tracker);
		// console.log("backspace is pressed");
	// }
	// else if (e.key == "a") {
		// console.log("A has been pressed");
	// }
	// but if the inputed key is incorrect then the tracker will not be incremented
	if (e.key == heading_another.innerText[tracker]) {
		if (e.key == ' ') {
			user_input.value = '';
		}
			
		tracker++;
		heading_another.style.color = "white";
	}
	// else if (e.key != heading_another.innerText[tracker]) {
	else {
		heading_another.style.color = "red";
		console.log("The value of tracker is " + tracker);
		console.log(heading_another.innerText[tracker]);
		// tracker++;
		mistakes ++;
	}
	// else {
		// console.log("The value of tracker is " + tracker);
		// console.log(heading_another.innerText[tracker]);
		// console.log("error");
		// heading_another.style.color = "red";
	// }
})