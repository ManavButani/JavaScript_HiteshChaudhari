fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        console.log(response);
    })
    .catch();

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        console.log("MANAC", response.json());
    })
    .catch();

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.value);
    })
    .catch();

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch();

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let joke = data.value;
        console.log("Joke manav", joke);
    })
    .catch();