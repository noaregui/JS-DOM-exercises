// Your code here
//1º nos ubicamos en el padre
let ul = document.querySelector("#parentLi");
//2º nos ubicamos en el hijo que queremos eliminar
let li2 = ul.childNodes[3];
//3º eliminar el hijo
ul.removeChild(li2);
