// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
           message: "Hello classe 73!",
           userName: "Alberto",
           userAge: 25,  
           fruit: "arancia",
           titleClass: "green bg-yellow"  
        }
    }
}).mount("#app");