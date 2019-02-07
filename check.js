function checkURL(url) {
    var request;
    request = new XMLHttpRequest();
    // false equals to sync request
    request.open('HEAD', url, false);
    try {
        request.send();
    }
    catch (e) {
        var err = e;
        console.log(err.message);
        console.log(err.name);
        console.log(err.stack);
    }
    console.log(request);
    // the object request will be actually modified
    if (request.status === 404)
        return url + " not online";
    else
        return "<a href=\"" + url + "\">" + url + "</a>";
    return "asd";
}
function checkURLs(url) {
    var html = "";
    for (var _i = 0, url_1 = url; _i < url_1.length; _i++) {
        var s = url_1[_i];
        html = html + "<li>" + checkURL(s) + "</li>";
    }
    return html;
}
