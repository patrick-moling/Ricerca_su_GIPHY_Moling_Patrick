let q = "cats"

function ricercaImmagine(){
    fetch("http://api.giphy.com/v1/gifs/search?q=${q}+cat&api_key=dc6zaTOxFJmzC")
    .then(data => {
        return data.json;
    })
    .then(jsonData => {
        console.log(jsonData);
    });
}

ricercaImmagine();