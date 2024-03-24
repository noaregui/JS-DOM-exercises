// If you check the HTML, you will find that the second <li> has the id=secondElement
// You can use that to your advantage like a CSS selector

// Your code here
//1º nos colocamos en el 2º li que es el que tiene id
let li2 = document.querySelector('#secondElement')

//2º paso
/*Ahí ya sabemos que queremos eliminar este elemento, pero recuerda que para eliminar
a un hijo hay que ir primero al padre*/
//donde estamos.vamosalpadre.eliminamos el hijo de este (es li2)
li2.parentNode.removeChild(li2)

//Objeto for in
//Contrario (array) for of