// Your code here
/*Creamos variable para crear el elemento <p></p>*/
let parrafo = document.createElement("p");

//<p> con fondo amarillo
parrafo.style.background = "yellow";
//<p>"Hello World"</p>
parrafo.innerHTML = "Hello World";

//Tenemos que añadir el elemento <p> al documento.
//1º donde añadimos (el qué);
document.body.appendChild(parrafo);
