/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición).
 */


function contar(numero){

    if(numero == 100){
        console.log("fin"); // la funcion recursiva termina cuando el parametro llega a ser igual a 100
        return;
    }

    console.log(numero); //se imprime numero para visualizar como aumenta
    console.log(contar(numero + 1)); // la condicion en este caso hace que el parametro sume 1

         
}

contar(1);



function factorial(facto){


    if(facto == 0 || facto == 1){
        return 1;
    }

    var resta = facto - 1;

    return facto * factorial(resta);
    
};


console.log(factorial(4));




function fibonacci(n){

    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(10));