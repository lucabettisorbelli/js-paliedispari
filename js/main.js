
// esercizio palindromo

let parola = prompt("inserisci una parola");
function isPalindromo () {
    let stringaParola = parola.split(""); // trasforma stringa in array
    let StringaAlContrario = stringaParola.reverse(); // rovescia l'array
    let parolaAlContrario = StringaAlContrario.join(""); // "unisce elementi array"

    if (parolaAlContrario === parola) {
        console.log(`la parola ${parolaAlContrario} è palindroma`);
    } else {
        console.log("la parola è sbagliata");
    }

}

isPalindromo ();