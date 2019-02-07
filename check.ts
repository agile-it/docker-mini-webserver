function checkURL(url: string) : string {
    let request;
    request = new XMLHttpRequest();

    // false equals to sync request
    request.open('HEAD', url, false);
    try {
        request.send();
    }
    catch (e) {
        let err = <Error> e;
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

function checkURLs(url :string[]) : string {
    let html = "";
    for (let s of  url) {
        html = html + "<li>"+checkURL(s)+"</li>";
    }
    return html;
}
