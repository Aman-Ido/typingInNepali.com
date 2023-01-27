// creating elements for the result
const result_div = document.createElement("div"); // creating a container / div
result_div.setAttribute("id", "result_div"); // adding a id
result_div.classList.add("result_div_style"); // adding a class

// creating heading for result showing, there will be mistakes, words typed, time, and the words per minute
const heading_for_result_mistakes = document.createElement("h3");
const heading_for_result_words = document.createElement("h3");
const heading_for_result_time = document.createElement("h3");
const heading_for_result_wpm = document.createElement("h3");

// creating a button that will reset everything
const button_for_result_ = document.createElement("button");
button_for_result_.classList.add("button_for_result_styling");
button_for_result_.textContent = "again";

// adding class and other necessary attribute to these elements
heading_for_result_mistakes.classList.add("heading_result_style");
heading_for_result_words.classList.add("heading_result_style");
heading_for_result_time.classList.add("heading_result_style");
heading_for_result_wpm.classList.add("heading_result_style");

// appending all these element to the main element
result_div.append(heading_for_result_mistakes);
result_div.append(heading_for_result_words);
result_div.append(heading_for_result_time);
result_div.append(heading_for_result_wpm);
result_div.append(button_for_result_);

// adding event listener for the button
button_for_result_.addEventListener("click", function (e) {
	window.location.reload();
})



// creating time values / variables
// let minute = 0;
let second = 60;

let CONDITION = "running";
// let string_time = `${toString(minute)} : ${toString(second)}`;
// let string_time = minute + " : " + second;
let string_time = second;

// selecting the div with timer_main id
const timer_main = document.getElementById("timer_main");

// setting the value of the timer_main to string_time
timer_main.innerText = string_time;

// variables for time
let time_begin, time_end;

// setting an interval that will change the value of second every second
user_input.addEventListener("click", function (e) {
	time_begin = start_timer_here();
	setInterval (function () {
		
		if (CONDITION == "running") {
			second --;
			string_time = second;
			// updating the timer
			timer_main.innerText = string_time;
			
			// if the timer is less than 0 then we will output the time is done
			if (second === 0) {
				console.log("It is time");
				CONDITION = "stopped";
				string_time = "TIME'S UP";
				
				time_end = start_timer_here();
				
				// calculating the reuslt 
				let accuracy_per = (((tracker - mistakes) * 100) / tracker);
				
				if (typeof(accuracy_per) != typeof(float)) {
					accuracy_per = 0;
				}
				
				// calculating time
				let time_result = time_end - time_begin;
				
				let words_per_minute = (((tracker - mistakes) / 5) * 60) / (time_result / 1000);
				// let words_per_minute = (tracker);
				
				// setting up the result, filling the values in the headings
				// heading_for_result_mistakes.textContent =  `Accuracy : ` + (((tracker - mistakes) * 100) / tracker) + "";
				heading_for_result_mistakes.textContent =  `Accuracy : ` + accuracy_per + "%";
				heading_for_result_words.textContent = `Characters typed : ` + tracker ;
				heading_for_result_time.textContent = `Time : 60 sec`;
				heading_for_result_wpm.textContent = `WPM : ` + words_per_minute + " WPM";
				
				container_text_here.append(result_div);
			}
			if (second <= 10 ) {
				timer_main.style.color = "red";
			}
		}
		else {
			timer_main.innerText = string_time;
		}
	}, 1000);
});