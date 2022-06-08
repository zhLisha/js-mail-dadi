/* 
- Generare numero random da 1 a 6 per l'utente e computer
- Stabilire il vincitore in base al numero maggiore
- Messaggio all'utente dell'esito della partita
*/

// Creazione dadi user e computer
const userDice = Math.floor(Math.random() * 6) + 1;
const pcDice = Math.floor(Math.random() * 6) + 1;

// Inserimento dei risultati dei dadi in DOM
const userDiceResult = document.querySelector('.user-dice').innerHTML = `${'Il tuo tiro:'} ${userDice}`;
const pcDiceResult = document.querySelector('.pc-dice').innerHTML = `${'Il tiro del pc:'} ${pcDice}`;


// Valutare chi ha il numero piu' alto per il vincitore e scrivere il messaggio
let userMessage = 'Avete avuto lo stesso risultato';

if(userDice > pcDice) {
    userMessage = 'Congratulazioni, hai vinto!'
} else if(userDice < pcDice) {
    userMessage = 'Peccato, riprova di nuovo!'
}

// Stampare il messaggio del risultato finale di vincita o perdita
const finalResult = document.querySelector('.results').innerHTML = userMessage;
