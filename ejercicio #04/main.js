
function palindorma(palabra1, palabra2){

    palabra1 = prompt("ingresa la primera palabra");
    palabra2 = prompt("ingresa la segunda palabra");

    let arrayP1 = Array.from(palabra1);
    let arrayP2 = Array.from(palabra2);
    let arrayP2In = arrayP2.reverse();

    //convertirlos a string
    let palabraN = arrayP1.join();
    let reverseN = arrayP2In.join();


    if(palabraN === reverseN){
    alert("la palabra es palindorma");
    }else{
    alert("la palabra no es palindroma");
    }

    return true;

}


function anaGrama(palabra1, palabra2){

    palabra1 = prompt("ingresa la primera palabra").toLowerCase();
    palabra2 = prompt("ingresa la segunda palabra").toLowerCase();


    if(palabra1.length == palabra2.length){

        //convertir en array, los ordena y los convierte a string
        let arrayN = Array.from(palabra1).sort().join();
        let arrayN2 = Array.from(palabra2).reverse().sort().join();

        if(arrayN == arrayN2){
            alert("son anagramas");
        }else{
            alert("no son anagramas");
        }

        alert("tienen la misma longitud");
    }else{
        alert("no tienen la misma longitud");
    }

    return true;

}


function isoGrama(palabra1, palabra2){

    palabra1 = prompt("ingresa la primera palabra").toLowerCase();
    palabra2 = prompt("ingresa la segunda palabra").toLowerCase();

    //convertir en array, los ordena y los convierte a string
    let arrayN = palabra1.split();
    let arrayN2 = palabra2.split();

    let set = new Set(arrayN); //set devuelve un objeto


    if(set.size == arrayN.length || set.size == arrayN2.length){ //se necesita comparar las longitudes no los datos
        alert("hay letras repetidas ");
    }else{
        alert("no hay letras que se repitan ");
    }
    

    return true;

}


function menu(){

    let opciones = parseInt(prompt(`
    MENU DE CONTACTOS
    1. palindromo
    2. anagrama
    3. isograma
    0. Salir
    Ingrese una opción:
    `));


    switch (opciones) {
        case 1:
        palindorma();
        break;
        case 2:
        anaGrama();
        break;
        case 3:
        isoGrama();
        break;
        default:
        alert("Seleccione una opción válida");
        break;
    }   

    return opciones;

}

menu();



