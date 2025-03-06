
let numeros = Math. floor(Math.random() * 55)+10;
let limite = 55;


for(let i = numeros; i < limite; i++){

    if(i === 16 || i % 3){
        continue;
    };

    console.log(i);

}