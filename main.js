let desde = parseInt(prompt())
let hasta = parseInt(prompt())

function esPrimo(num1) {
    
    for(let i = 2,raiz=Math.sqrt(num1); i <= raiz; i++)
        if(num1 % i === 0) return false;
    return num1 > 1;
}


for (let x = desde; x<=hasta ; x++) {
    if (esPrimo(x))
        console.log("El número " + x + " es primo");
}
