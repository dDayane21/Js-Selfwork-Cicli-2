let sommaDeiDispari = 0;
let conteggioDispari = 0;

for (let i = 1; i <= 20; i++){
    
    if(i % 2 === 0){
        console.log(i);        
    }else{sommaDeiDispari = sommaDeiDispari + i; conteggioDispari++;
    }
}

console.log(`somma totale dispari = ${sommaDeiDispari}`);
console.log(`quantità dispari = ${conteggioDispari}`);
console.log(`risultato media = ${sommaDeiDispari / conteggioDispari}`);
