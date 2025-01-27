// selezioniamo gli elementi di output
const card = document.querySelector('.contenitore');
const image = document.querySelector('.img-position');
const popUpImage = document.querySelector('.container-foto-max'); 

// setto l'endpoint
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// faccio partire la richiesta Ajax verso l'API per ricevere i dati
axios.get(endpoint)
    .then(responseObj => {
        const posts = responseObj.data;

        // Genera le card dinamicamente
        for (let i = 0; i < posts.length; i++) {
            let post = posts[i];
            const { title, date, url } = post;

            card.innerHTML += `
                <div class="card">
                    <div class="card-content">
                        <img src="${url}" alt="">
                        <span class="data">${date}</span>
                        <h2>${title.toUpperCase()}</h2>
                    </div>
                    <div class="pin">
                        <img src="./img/pin.svg" alt="">
                    </div>
                </div>
            `;
        }

        // Aggiorna l'immagine principale
        image.innerHTML = `
            <button class="close">chiudi</button>
            <img src="${posts[0].url}" alt="${posts[0].title}">
        `;

        // Seleziona tutte la card sulla pagina
        const cardButtons = document.querySelectorAll('.card');
        
        // Aggiungi event listener per ogni card
        cardButtons.forEach(cardButton => {
            cardButton.addEventListener('click', () => {
                popUpImage.classList.remove('none'); // Mostra il popup
            });
        });

        // seleziono il pulsante per chiudere limagine ingrandita
        const buttonClose = document.querySelector(".close");

        // creo il pulsante per chiudere l'immagine ingrandita
        buttonClose.addEventListener('click', () => {
            popUpImage.classList.add('none'); 
        });
    })
    .catch(error => {
        console.error(error); // Gestisce eventuali errori
    });