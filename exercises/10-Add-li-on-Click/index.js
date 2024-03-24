let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	//Creamos el elementoLi nuevo
	let elementoLi = document.createElement("li");
	//Le añadiremos texto para que se pueda ver bien
	elementoLi.innerHTML = "Nuevo item";
	/*Nos colocamos en el ul de myList para después poder añadir el hijo.
	Recuerda que como ya le hemos dicho que es un elemento ID no hará falta poner #*/
	let myList = document.getElementById("myList");
	myList.appendChild(elementoLi);
});
