// selezioniamo gli elementi di output
const card = document.querySelector('.contenitore');
const image = document.querySelector('.contenitore-popup');

// setto l'endpoint
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// faccio partire la richiesta Ajax verso l'API per ricevere i dati
axios.get(endpoint)
    //codice da eseguire in caso di successo
        .then(responseObj => {
            const posts = responseObj.data;

        // Genera le card e le immagini popUp dinamicamente
            for (let i = 0; i < posts.length; i++) {
                let post = posts[i];
                const { title, date, url } = post;

                // aggiunta delle card sulla pagina 
                    card.innerHTML += `
                        <div class="card">
                            <div class="card-content">
                                <img src="${url}" alt="${title}">
                                <span class="data">${date}</span>
                                <h2>${title.toUpperCase()}</h2>
                            </div>
                            <div class="pin">
                                <img src="./img/pin.svg" alt="">
                            </div>
                        </div>
                    `;

                // aggiunta delle imagini popUp con display 'none'
                    image.innerHTML += `
                    <div class="foto-max none">
                        <div class="img-position">
                            <button class="close">chiudi</button>
                            <img src="${url}" alt="${title}">
                        </div>
                    </div>
                    `;
            }

        // Seleziona tutte la card e le immagini sulla pagina
            const cardButtons = document.querySelectorAll('.card');
            const popUpImage = document.querySelectorAll('.foto-max'); 

        // seleziono il pulsante per chiudere limagine ingrandita
            const buttonClose = document.querySelectorAll(".close");

        // creo un for che per ogni card in parte fa un azione diversa
            for (let i = 0; i < cardButtons.length; i++){

        //creo un event listener per apripre le immagini al click 
            cardButtons[i].addEventListener('click', () => {
                popUpImage[i].classList.remove('none'); // Mostra il popup
            });

        // creo un event listener per chiudere l'immagine ingrandita
            buttonClose[i].addEventListener('click', () => {
                popUpImage[i].classList.add('none'); 
            });    
        }
    })
    // codice da eseguire in caso di errore
        .catch(error => {
            console.error(error); 
    });