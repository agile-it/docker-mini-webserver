var entry = /** @class */ (function () {
    function entry(name, url) {
        this.name = name;
        var domain = document.location.hostname;
        domain = domain.substring(domain.indexOf('.') + 1);
        var i = url.indexOf(".");
        this.url = url.substr(0, i + 1) + domain + url.substr(i + 1);
        console.log(this.url);
    }
    return entry;
}());
function checkURL(e) {
    var request;
    request = new XMLHttpRequest();
    request.onload = function () {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin", "<li><a href=\"" + e.url + "\">" + e.name + "</a></li>");
    };
    request.onerror = function () {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin", "<li>" + e.name + " not online</li>");
    };
    // false equals to sync request
    request.open('GET', e.url);
    request.send();
}
function checkURLs(es) {
    for (var _i = 0, es_1 = es; _i < es_1.length; _i++) {
        var e = es_1[_i];
        checkURL(e);
    }
}
