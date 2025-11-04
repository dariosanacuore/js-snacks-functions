/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function letteraIniziale(array) {
    newArray = [];
    let lettera = "A";
    for (let i = 0; i < array.length; i++) {
        const parola = array[i];
        //console.log(parola);
        const primaLettera = parola[0];
        if (primaLettera === lettera) {
            newArray.push(parola);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letteraIniziale(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]