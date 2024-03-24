let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let div = document.createElement("div");
	div.style.background = "yellow";
	div.innerHTML = "Hello World";
	document.body.appendChild(div);
});
