//EJERCICIO NUMERO 4 DE LOS RETOS DE PROGRAMACION DE MOUREDEV

/*
let variable = 10;

let variable2 = true;

let array = [1, "bob", 3, 4, "mark", 6, 7, "tyson", 9, 10 ,11 ,12, 13 ,14];

//añadiendo
array.push("james");

//eliminar primer elemento de un array
array.shift();

//ordenacion de un array
array.sort();

//imprimiendo
console.log(array);

*/


//DIFICULTAD EXTRA

  let agenda = [
    { nombre: "Santiago", telefono: 1234567890 },
    { nombre: "Carlos", telefono: 9876543210 }
  ];


  function buscar(ingresa, buscador){

    ingresa = prompt("ingresa un contacto en la agenda: ");

    buscador = agenda.some((contacto) => { 

        if(ingresa === contacto.nombre){

          console.log(`el contacto ${contacto.nombre} existe en la lista de contactos`); 

          return true; //devuelve true

        }
        
    });
  
    console.log("el contacto no existe")

    return buscador;

  }

  function insertar(identidad, numero){

    identidad = prompt("ingresa un nuevo contacto: ");

    numero = parseInt(prompt("ingresa un nuevo numero de contacto: ", 0));

    let regex = /r"^\+\d{1,3}\d{11}$"/;

    if(regex.test(numero)){ //pruebo si la expresion regular se cumple
        console.log("el numero no puede contener caracteres que no sean numericos");
    }else{
        agenda.push({nombre: identidad, telefono: numero});
    }

    return agenda;

  }
  
  function eliminar(eliminar){

    eliminar = prompt("ingrese el nombre del contacto que desea eliminar: ");

    let borrarContacto = agenda.findIndex(contact  => contact.nombre == eliminar);

    if(borrarContacto != 1){
      agenda.splice(borrarContacto, 1); //splice no se puede usar dentro de find o findIndex solo despues
    }else{
      alert("el contacto no esta en la lista o ya ha sido eliminado");
    }

    return borrarContacto;    

}

  function editar(nombreNuevo, telefonoNuevo){

    let editarContacto = agenda.find(contact => {

      buscado = prompt("ingresa el contacto que desea cambiar");

      if (contact.nombre === buscado) {

        encontrado = prompt("que desea cambiar, nombre o telefono?");

        if(encontrado == "nombre"){
          nombreNuevo = prompt("ingresa el nuevo nombre para el contacto: ");
          contact.nombre = nombreNuevo;
          return true; // Indica que se encontró y actualizó
        }else if(encontrado == "telefono"){
          telefonoNuevo = parseInt(prompt("ingresa el nuevo telefono para el contacto: "));
          contact.telefono = telefonoNuevo;
          return true;
        }

      }

      return false; // No se encontró

      })

      console.log(agenda);

      return editarContacto;
    
}

  function menu(){

    let opciones = parseInt(prompt(`
    MENU DE CONTACTOS
    1. Agregar
    2. Buscar
    3. Eliminar
    4. Editar
    0. Salir
    Ingrese una opción:
  `));


    switch (opciones) {
      case 1:
        insertar();
        break;
      case 2:
        buscar();
        break;
      case 3:
        eliminar();
        break;
      case 4:
        editar();
        break;
      default:
        alert("Seleccione una opción válida");
        break;
    }   

    return opciones;

  }

menu();
//buscar();
//insertar();
//eliminar();
//editar();
console.log(agenda);




    



