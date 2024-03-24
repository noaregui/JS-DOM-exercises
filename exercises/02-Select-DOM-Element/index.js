// Your code here
/*Creamos una variable para hacer la selección:
Primero seleccionamos el <h1>, mediante su ID, por eso ponemos #*/
let aux = document.querySelector('#theTitle');
/*Ahora que ya estamos en <h1> seleccionamos la variable que la recoge.
Como queremos que en la alerta aparezca el mensaje que aparece en ID seleccionaremos
no solo la variable de <h1> sino también el ID*/
alert(aux.id);

//Si hacemos alert(aux) dará error porque recoge todo el objeto de h1

