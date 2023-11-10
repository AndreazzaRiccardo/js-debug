/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    // Qui manca la virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];
// i valori delle chiavi sono alcuni con l'inziale maiuscola e altri minuscola
// ma se voglio fare una cosa migliore posso utilizzare dopo auto.type il .toLowerCase()
// in questo modo posso dire nel mio confronto: ignora il case Sensitive

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');
// l'arrow function è scritta con una sintassi sbagliata

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});
// La sintassi è sbagliata, il return cosi non è implicito ma da inserire

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});
// Qui il confronto è errato, bisogna usare && per definire and

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
// L'ultimo console log non è strutturato come gli altri
