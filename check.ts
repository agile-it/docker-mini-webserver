class entry {
    url :string;
    id  : string;
}

function checkURL(url: string) {
    let request;
    request = new XMLHttpRequest();
    request.onload = function() {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin","<li><a href=\"" + url + "\">" + url + "</a></li>")
    }
    request.onerror = function () {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin", "<li>"+url + " not online</li>")
    }
    // false equals to sync request
    request.open('GET', url);
    request.send();
}

function checkURLs(url :string[]) {
    for (let s of  url) {
        checkURL(s);
    }
}
