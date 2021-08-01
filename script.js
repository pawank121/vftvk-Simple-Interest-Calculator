function rateChange() {
	let slider = document.getElementById("rate");
	let output = document.getElementById("current_rate");
	output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function () {
		output.innerHTML = this.value;
	};
}

function getAmount() {
	return document.getElementById("principal").value;
}

function getRate() {
	return document.getElementById("rate").value;
}

function getYears() {
	let option = document.getElementById("years").value;
	console.log(option);
	return option;
}

function compute() {
	rateChange();
	let amount = getAmount() ? parseInt(getAmount()) : 0;
	let rate = getRate() ? parseInt(getRate()) : 0;
	let years = getYears() ? parseInt(getYears()) : 0;
	console.log(amount, rate, years);
	let returnValue = (amount * rate * years) / 100;
	document.getElementById("result").innerHTML = `
                If you deposit <mark>${amount}</mark>,<br>
                at an interest rate of <mark>${rate}%</mark>.<br>
                You will receive an amount of <mark>${amount + returnValue}</mark>,<br>
                in the year <mark>${new Date().getFullYear() + years}</mark>,`;
}
