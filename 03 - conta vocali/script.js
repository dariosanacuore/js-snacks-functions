/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numVocali() {
    let j = 0;
    let newArray = [];
    for (let i = 0; i < word.length; i++) {
        curLetter = word[i];
        //console.log(curLetter);
        if (curLetter === "a" || curLetter === "e" || curLetter === "i" || curLetter === "o" || curLetter === "u") {
            j++;
            if ("aeiou".includes(curLetter)) {
                newArray.push(curLetter);
            }

        }
    }

    return [j, newArray];

}

// Invoca la funzione qui e stampa il risultato in console
const risultato = numVocali(word);
console.log(risultato[0]);
console.log(risultato[1]);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)