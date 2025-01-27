// selezioniamo gli elementi di output
const card = document.querySelector('.contenitore')
const image = document.querySelector('.img-position')
console.log(card);

// setto l'endpoint

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

// faccio partire la richiesta Ajax verso lAPI per ricevere i dati
axios.get(endpoint)
            //codice da eseguire in caso di successo
            .then(responseObj => {
                
                const posts = responseObj.data;

                for(let i = 0; i < posts.length; i++) {
                    let post = posts[i];
                    console.log(post);
                    
                    const  {title, date, url } = post

                    card.innerHTML +=`
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
                    `
                    // image.innerHTML +=`
                    // <img src="${url}" alt="${title}">
                    // `
                }
                    image.innerHTML =`
                    <button>chiudi</button>
                    <img src="${posts[0].url}" alt="${posts[0].title}">
                    `
                
            })
            // codice da eseguire in caso di errore
            .catch(error => {
                
                console.error(error)
            })