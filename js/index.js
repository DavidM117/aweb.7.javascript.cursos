/*
console.log("Hola mundo");

let nombre = "Aplicaciones web";
if(true){
    let nombre ="Base de datos"
    console.log(nombre)
}
console.log(nombre)
*/

const materia = {
    nombre: "aplicaciones web",
    horario: "9:00 a 10:45 hrs"
}
Object.freeze(materia);
console.log(materia.nombre);
materia.nombre = "Base de datos";
console.log(materia.nombre);

var suma = (a,b) => {
    return a+b;
}
console.log(suma(5,8));

var unSaludo = (nombre="David",edad="19") => {
    console.log(`Hola soy ${nombre} y mi edad es ${edad} años`);
}
console.log("-------------");
unSaludo();
console.log("-------------");
unSaludo("Alexis");
console.log("-------------");
unSaludo("Alexis,18");

var num1 = 2;
var num2 = 34;
console.log(`La suma de ${num1} + ${num2} es ${num1+num2+' oh la la'}`);

console.log("Hola lala vamos a ver el salto de linea\nya hice uno");

var curso = {
    nombre:"",
    descripcion:"",
    docente:{
        nombre:"",
        cursos: 0
    }
};

function actualizar(){
    console.log("Se llamó a actualizar");
    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;
    actualizarficha();
    console.log(curso);

}

function actualizarficha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
}

var btnCambiar = document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click", ()=>{
    document.querySelector(".btn-success").innerHTML="Update";
});