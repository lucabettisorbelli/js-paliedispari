
// esercizio palindromo

// let parola = prompt("inserisci una parola");
// function isPalindromo () {
//     let stringaParola = parola.split(""); // trasforma stringa in array
//     let StringaAlContrario = stringaParola.reverse(); // rovescia l'array
//     let parolaAlContrario = StringaAlContrario.join(""); // "unisce elementi array"

//     if (parolaAlContrario === parola) {
//         console.log(`la parola ${parolaAlContrario} è palindroma`);
//     } else {
//         console.log("la parola è sbagliata");
//     }

// }

// isPalindromo ();

// esercizio pari o dispari
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
let pariDispariUtente = prompt("scegli pari o dispari");
let numeroOk;

if (numeroUtente <= 5 && numeroUtente !== 0) {
    let numeroOk = numeroUtente;
    console.log(`il numero ${numeroOk} è corretto`)
} else {
    console.log(`il tuo numero ${numeroUtente} non è corretto`);
}

let numeroPariUtente;
let numeroDispariUtente;

if ( numeroOk % 2 == 0) {
    let numeroOk = numeroPariUtente;
    console.log("hai scelto un numero pari")
} else {
    numeroOk = numeroDispariUtente;
    console.log("hai scelto un numero dispari")

}

function numeroRandom () {



}