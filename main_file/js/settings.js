/* 
This file is only for the function of settings and about us button 
The reason I didn't include this to the main.js is because it will just made the code unreadable
*/
const setting_logo = document.getElementById("setting_logo");
const about_logo = document.getElementById("about_logo");
const container_head = document.getElementById("container_head");


// creating an element
// const ulist = document.createElement("ul");
// ulist.setAttribute("id", "ulist");
// const l_one = document.createElement("li");
// l_one.classList.add("main_list_settings");
// l_one.innerHTML = `color : <p class="list_settings">${sessionStorage.getItem("theme_")}</p>`;
// const l_two = document.createElement("li");
// l_two.classList.add("main_list_settings");
// l_two.innerHTML = `words : <p class="list_settings">${sessionStorage.getItem("words_")}</p>`;
// ulist.append(l_one);
// ulist.append(l_two);

// creating the main container
const ulist = document.createElement("div");
ulist.setAttribute("id", "ulist");

// creating element to change theme
// const d_one = document.createElement("div");
// d_one.classList.add("main_list_settings");
// d_one.innerHTML = `Theme : <select class="list_settings"><option class="option_settings">${sessionStorage.getItem("theme_main")}</option><option class="option_settings">${sessionStorage.getItem("theme_second")}</option></select>`;
// ulist.append(d_one);
// d_one.

// creating a form
const f_one = document.createElement("form");
f_one.setAttribute("id", "ulist"); // setting a id for form

// creating a label for theme change
const label_one = document.createElement("label");
label_one.innerText = "Theme >> "; // giving the label a value
label_one.setAttribute("name", "change_in_theme"); // giving the label a name

// creating a input -> for theme
const input_one = document.createElement("input");
input_one.setAttribute("name", "change_in_theme"); // giving the input a name same as the corresponding label
input_one.setAttribute("placeholder", sessionStorage.getItem("theme_")); // giving the input a placeholder value based on the sessionStorage
input_one.classList.add("setting_input"); // setting a class for the input

// creating a break line element
// const break_line = document.createElement("<br>");

// createing a label for time change
const label_two = document.createElement("label");
label_two.innerText = "Time >> "; // giving the label a value
label_two.setAttribute("name", "change_in_time"); // giving name to the label_two that will be same to the input's name 

// creating another input -> for time
const input_two = document.createElement("input");
input_two.setAttribute("name", "change_in_time");
input_two.setAttribute("placeholder", sessionStorage.getItem("time_")); // giving input_two a time value (from sessionStorage)
input_two.classList.add("setting_input"); // setting a class for the input


// createing a label for time change
const label_three = document.createElement("label");
label_three.innerText = "Words >> "; // giving the label a value
label_three.setAttribute("name", "change_in_words"); // giving name to the label_two that will be same to the input's name 

// creating another input -> for number of words
const input_three = document.createElement("input");
input_three.setAttribute("name", "change_in_words");
input_three.setAttribute("placeholder", sessionStorage.getItem("word_")); // giving input_two a time value (from sessionStorage)
input_three.classList.add("setting_input"); // setting a class for the input

// creating a button
const button_end = document.createElement("button");
button_end.innerText = "Apply Changes"; // giving value to the button
button_end.classList.add("setting_button");

// creating a note this will be a temporary note as a placeholder -> TODO: temporary codes
const msg_end = document.createElement("h6");
msg_end.classList.add("msg_end");
msg_end.textContent = `This is still in development, we will have it in service soon, sorry for inconvnience`; // just a message

 const msg_nd = document.createElement("h6");
 msg_nd.classList.add("msg_end");
 msg_nd.textContent = `If you keep this dialog box open and type it will show error / typing mistake`;

// append all of that to the form
f_one.append(label_one); // appended label_one
f_one.append(input_one); // appended input_one
// f_one.append(break_line); // breaking the line in the middle
f_one.append(document.createElement("br"));
f_one.append(label_two); // appended label_two
f_one.append(input_two); // appended input_two
f_one.append(document.createElement("br"));
f_one.append(label_three); // appended label_three
f_one.append(input_three); // appended input_three
f_one.append(document.createElement("br"));

f_one.append(button_end); // appended the button to the form

// appending the temporary message
f_one.append(msg_end);

f_one.append(msg_nd);


// if the setting button is clicked 
setting_logo.addEventListener("click", function (e) {
	e.preventDefault();
	let value_one = sessionStorage.getItem("is_setting_open");
	
	if (sessionStorage.getItem("is_setting_open") === "false") {
		// heading_two.prepend(ulist);
		heading_two.prepend(f_one);
		sessionStorage.setItem("is_setting_open", "true");
		// document.body.append(ulist);
		console.log(value_one);
	}
	else {
		f_one.remove();
		sessionStorage.setItem("is_setting_open", "false");
		console.log(value_one);
	}
})


// working on about_logo
about_logo.addEventListener("click", function (e) {
	window.open("./main_file/others/about_us.html", "_blank");
})