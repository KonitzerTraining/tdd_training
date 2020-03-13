window.ACME = window.ACME || {};
window.ACME.HttpClient = function () {

    function HttpClient() {
        this.xhr = new XMLHttpRequest();
    }

    HttpClient.prototype.get = function (url, cb) {
        if (typeof url !== 'string' || typeof cb !== 'function') {
            throw new Error();
        }

        console.log(this);
        this.xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('----------- call');
                cb();
            }
        };
        this.xhr.open('GET', url);
        this.xhr.send();
    };
    return HttpClient;
}();
