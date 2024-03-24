//Nos da un array de countries
let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
//Seleccionamos el elementto <select> del html mediante su id
let selectElement = document.getElementById("mySelect");

//Utilizamos bucle for para iterar sobre cada elemento del array countries. 
for (let i = 0; i < countries.length; i++) {
//En cada iteración se crea un elemento option, es decir 7.
  let option = document.createElement("option");
  //El nombre de cada opción sera el valor de cada elemento countries[i], es decir USA, France...
  //¿Cuál es la diferencia entre el valor (value) y el contenido (innerHTML)?
  option.value = countries[i];  //value es un atributo, como la propiedad, option es objeto
  option.innerHTML = countries[i];
  //Añadimos las opciones a selectElement
  selectElement.appendChild(option);
}

//La función change lo que hace es activar la función cuando cambia la selección del elemento
selectElement.addEventListener("change", function () {
  let selectedCountry = selectElement.value; //¿?
  alert(selectedCountry);
});
