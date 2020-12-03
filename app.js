let chiaveAPI = "HFqaiAe1aTenXLcQKxhGO8coltYQYbRW";

function ricercaImmagine(){
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=%${chiaveAPI}&limit=50')
    .then(data => {
        console.log(data);
    });
}

ricercaImmagine();