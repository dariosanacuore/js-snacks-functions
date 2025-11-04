/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function capitalize(array) {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        const parola = array[i];
        //console.log(parola);
        const primaLettera = parola[0].toUpperCase();
        newArray.push(primaLettera);

    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(capitalize(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]