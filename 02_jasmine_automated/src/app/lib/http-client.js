window.ACME = window.ACME || {};
window.ACME.HttpClient = function () {
    function HttpClient() {
        this.xhr = new XMLHttpRequest();
    }

    HttpClient.prototype.get = function (url, cb) {
        if(typeof url !== 'string' || typeof cb !== 'function') {
            throw new Error();
        }
        this.xhr.onreadystatechange = cb;
        this.xhr.open('GET', url);
        this.xhr.send();
    };
    return HttpClient;
}();
