var entry = /** @class */ (function () {
    function entry() {
    }
    return entry;
}());
function checkURL(url) {
    var request;
    request = new XMLHttpRequest();
    request.onload = function () {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin", "<li><a href=\"" + url + "\">" + url + "</a></li>");
    };
    request.onerror = function () {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin", "<li>" + url + " not online</li>");
    };
    // false equals to sync request
    request.open('GET', url);
    request.send();
}
function checkURLs(url) {
    for (var _i = 0, url_1 = url; _i < url_1.length; _i++) {
        var s = url_1[_i];
        checkURL(s);
    }
}
