


var version = '2.4.5';



function pruefling () {
    return fetch('https://swapi.co/api/planets/1/')
        .then(function (response) {
            return response.json();
        })
}