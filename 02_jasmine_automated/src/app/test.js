// eslint-disable-next-line no-unused-vars
var version = '2.4.5';


// eslint-disable-next-line no-unused-vars
function pruefling () {
    return fetch('https://swapi.co/api/planets/1/')
        .then(function (response) {
            return response.json();
        });
}