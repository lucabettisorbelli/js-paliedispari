
// esercizio palindromo

    let parolaUtente = prompt("Iserisci una parola");

    let reverseWord = "";
    for (let i = parolaUtente.length -1; i >= 0; i--) {
        reverseWord += parolaUtente[i];
    }

    if (parolaUtente === reverseWord) {
        console.log(`${parolaUtente} è palindroma`);
    } else {
        console.log(`${parolaUtente} non è palindroma`);
    };


// esercizio pari o dispari

let bottone = document.getElementById("button");

bottone.addEventListener ("click", function () {

    let numeroUtente = parseInt(document.getElementById("sceltaUtente").value);
    let pariDispariUtente = document.getElementById("pariDispari").value;

if (numeroUtente <= 5 && numeroUtente >=1) {
    
    if ( numeroUtente % 2 == 0) {
        let elementoPari = document.createElement("p");
        elementoPari.innerText = "hai scelto un numero pari"
        document.body.appendChild(elementoPari);
    } else {
        let elementoDispari = document.createElement("p");
        elementoDispari.innerText = "hai scelto un numero dispari"
        document.body.appendChild(elementoDispari);
    } 
    } 


function numeroRandom (min, max) {

    let risultato = Math.floor(Math.random() * (max - min + 1) + min);

    return risultato;
    
}


let mioNumero = numeroRandom(1,5);
let elementoRandom = document.createElement("p");
elementoRandom.innerText = (`il mio numero generato è ${mioNumero}`);
document.body.appendChild(elementoRandom);
// console.log(`il mio numero generato è ${mioNumero}`);

let sommaNumeri = numeroUtente + mioNumero;
let somma = document.querySelector("#somma");
somma.innerText = `la somma dei numeri è ${sommaNumeri}`
console.log(`la somma dei numeri è ${sommaNumeri}`);

if (sommaNumeri % 2 == 0 && pariDispariUtente == "pari") {
    let sommaNumeriPari = document.createElement ("p");
    sommaNumeriPari.innerText = "ha vinto l'utente";
    document.body.appendChild(sommaNumeriPari);
    console.log("ha vinto l'utente");
} else if (sommaNumeri % 2 == 1 && pariDispariUtente == "dispari") {
    let sommaNumeriDispari = document.createElement ("p");
    sommaNumeriDispari.innerText = "ha vinto l'utente";
    document.body.appendChild(sommaNumeriDispari);
    console.log("ha vinto l'utente");
} else {
    let sceltaComputer = document.createElement("p");
    sceltaComputer.innerText = "ho vinto io!";
    document.body.appendChild(sceltaComputer);
    console.log ("ho vinto io!");
} ;

});



