
// esercizio palindromo

    // let parolaUtente = prompt("Iserisci una parola");

    // let reverseWord = "";
    // for (let i = parolaUtente.length -1; i >= 0; i--) {
    //     reverseWord += parolaUtente[i];
    // }

    // if (parolaUtente === reverseWord) {
    //     console.log(`${parolaUtente} è palindroma`);
    // } else {
    //     console.log(`${parolaUtente} non è palindroma`);
    // };


//esercizio pari o dispari

let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
let pariDispariUtente = prompt("scegli pari o dispari");

if (numeroUtente <= 5 && numeroUtente >=1) {
    console.log(`il numero ${numeroUtente} è corretto`);
    
    if ( numeroUtente % 2 == 0) {
        console.log("hai scelto un numero pari");
    } else {
        console.log("hai scelto un numero dispari");
        
    } 
    } 

function numeroRandom (min, max) {
    

    let risultato = Math.floor(Math.random() * (max - min + 1) + min);

    return risultato;
    
}


let mioNumero = numeroRandom(1,5);
console.log(`il mio numero generato è ${mioNumero}`);

let sommaNumeri = numeroUtente + mioNumero;
console.log(sommaNumeri);

if (sommaNumeri % 2 == 0 && pariDispariUtente == "pari") {
    console.log("ha vinto l'utente");
} else if (sommaNumeri % 2 == 1 && pariDispariUtente == "dispari") {
    console.log("ha vinto l'utente");
} else {
    console.log ("ho vinto io!");
} ;





