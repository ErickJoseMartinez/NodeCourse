const saludar =(nombre) =>{
   return `Saludos ${nombre}`; // Saludos + nombre
}

console.log(saludar('Erick'));

console.log(`Inicio de Programa`);
setTimeout(()=>{
    console.log(`Primer TimeOut`);
},3000);

setTimeout(()=>{
    console.log(`Segundo TimeOut`);
},0);

setTimeout(()=>{
    console.log(`Tercer TimeOut`);
},0);

console.log(`Fin de Programa`);