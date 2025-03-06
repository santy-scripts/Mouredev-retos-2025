
function multiplo(multi3, multi5){

    multi3 = "multiplo de 3";
    multi5 = "multiplo de 5";
    let contador = 0;

    for(let i = 1; i<=100; i++){

        if(i%3 === 0 && i%5 === 0){
            console.log(multi3 +" y "+ multi5);
        }else if(i%3 === 0){
            console.log(multi3);
        }else if(i%5 === 0){
            console.log(multi5);
        }else{
            console.log(i)
            contador++;
        }
    }

    return contador;
};


multiplo();