/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// Questo ciclo for non ritornerà nulla perchè i non è maggiore di 5, di conseguenza non incrementerà mai



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// Qui c'è un errore nella sintassi, stiamo facendo un confronto, quindi ci serviranno almeno 2 uguali nella condizione


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// Errore nella sintassi, ci vuole il punto e virgola all'interno del ciclo for


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// L'array in ingresso deve essere inserito come parametro, non dichiarato all'interno della funzione
//Punto e virgola dopo la i è un errore di sintassi
//Dentro evenNumbers devo pushiare numbers[i] e non solo l'indice
// Nella condizione ci volgiono almeno due uguali perchè è un confronto
// Il return deve stare all'esterno del ciclo for
// Devo ciclare fino a che i è minore di numbers length e non -1
// Punto e virgola dopo la condizione è un errore di sintassi
// Nella condizione devo confrontare numbers[i] quindi il singolo numero e non tutto l'array
