// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
           message: "Ciao! Questo è il mio primo scipt con Vue",

           imageUrl:"https://picsum.photos/200/300"

        }
    }
}).mount("#app");