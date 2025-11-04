/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluta() {
    const ora = new Date().getHours();

    if (ora < 13) {
        return "Buongiorno " + name;
    } else if (ora < 18) {
        return "Buon pomeriggio " + name;
    } else {
        return "Buonasera " + name;
    }
}

console.log(saluta());
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.