/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// =============================================================================
// por valor
// =============================================================================

//Por Valor: Se hace una copia independiente del dato.
let variable = 10
let a = variable // se copia en dato de variable en a

a = 20; // a cambia de valor pero variable sigue siendo 10 ya que es independiente

console.log(variable); // 10
console.log(a); // 20 


// =============================================================================
// por referencia
// =============================================================================

/* 
Por Referencia: Se copia la dirección de memoria, por lo que modificar una variable afecta a la otra.
*/
let obj1 = { nombre: "Santiago" };
let obj2 = obj1;  // Se copia la referencia, no el valor

obj2.nombre = "Andrés";  // Cambia el objeto al que ambos apuntan

console.log(obj1.nombre); // "Andrés" (también cambia en obj1)
console.log(obj2.nombre); // "Andrés"


// =============================================================================
// funcion que recibe dos parametros por valor
// =============================================================================

let n1 = 2; 
let n2 = 3;

function suma(result){ 

    result = n1 + n2; //el parametro result dentro de la funcion recibe copias de las variables anteriores

    console.log(result);
    return true;
}

suma(); // 5
console.log(n1); // 2 //no se modifican 
console.log(n2);// 3

// =============================================================================
// funcion que recibe dos parametros por referencia
// =============================================================================

//en javascript no se puede pasar por referencia valores priomitivos
//solamente, arrays, objetos y funciones

function modificar(obj) {
    obj.valor = 100;  // Se modifica el objeto original
}

let miObjeto = { valor: 50 };
modificar(miObjeto);
console.log(miObjeto.valor); // Imprime 100
