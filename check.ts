class entry {
    name :string;
    url  : string;

    constructor(name: string, url: string) {
        this.name = name;
        let domain = document.location.hostname;
        domain = domain.substring(domain.indexOf('.')+1);
        let i = url.indexOf(".");
        this.url = url.substr(0,i+1)+domain+url.substr(i+1);
        console.log(this.url + " : " + this.name);
    }
}

function checkURL(e: entry) {
    let request;
    request = new XMLHttpRequest();
    request.onload = function() {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin","<li><a href=\"" + e.url + "\">" + e.name + "</a></li>")
    }
    request.onerror = function () {
        document.getElementById("list")
            .insertAdjacentHTML("afterbegin", "<li>"+e.name + " not online</li>")
    }
    // false equals to sync request
    request.open('GET', e.url);
    request.send();
}

function checkURLs(es :entry[]) {
    for (let e of  es) {
        checkURL(e);
    }
}
