window.ACME = window.ACME || {};
window.ACME.HttpClient = function () {
    function HttpClient() {
        this.xhr = new XMLHttpRequest();
    }

    HttpClient.prototype.get = function () {
        //this.xhr.open()
    };
    return HttpClient;
}();
