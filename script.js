function rateChange() {
	let slider = document.getElementById("rate");
	let output = document.getElementById("current_rate");
	output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function () {
		output.innerHTML = this.value;
	};
}

function getprincipal() {
	return document.getElementById("principal").value;
}

function getRate() {
	return document.getElementById("rate").value;
}

function getYears() {
	let option = document.getElementById("years").value;
	return option;
}

function validtePrincipal(data) {
	if (data <= 0 || data === null || data === undefined) return false;
	return true;
}

function compute() {
	rateChange();
	let principal = getprincipal() ? parseFloat(getprincipal()) : 0;
	let rate = getRate() ? parseFloat(getRate()) : 0;
	let years = getYears() ? parseInt(getYears()) : 0;
	let returnValue = parseFloat(((principal * rate * years) / 100).toFixed(2));

	if (validtePrincipal(principal)) {
		let invalid = document.getElementById("invalid");
		invalid.innerText = "";
		invalid.classList.remove("invalid");

		let amount = parseFloat((returnValue + principal).toFixed(2));

		let result = document.getElementById("result");

		result.innerHTML = `
                If you deposit <mark>${principal}</mark>,<br>
                at an interest rate of <mark>${rate}%</mark>.<br>
                You will receive an principal of <mark>${amount}</mark>,<br>
                in the year <mark>${new Date().getFullYear() + years}</mark>,`;
		result.classList.remove("invalid");
	} else {
		let invalid = document.getElementById("invalid");
		invalid.innerText = "Please enter a positive number !";
		invalid.classList.add("invalid");
		let result = document.getElementById("result");
		result.innerText = "Please enter valid Inputs !";
		result.classList.add("invalid");
	}
}
