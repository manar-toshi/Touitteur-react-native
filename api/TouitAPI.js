const API_URL = "touiteur.cefim-formation.org";

function httpGetMessages(timestamp, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + API_URL + '/list?ts=' + encodeURIComponent(timestamp), true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText));
        }
    });
    request.send();
}

function httpSendMessage(name, message, callback) {
    const request = new XMLHttpRequest();
    request.open('POST', 'http://' + API_URL + '/send', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText));
        }
    });
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send('name=' + encodeURIComponent(name) + '&message=' + encodeURIComponent(message));
}

function httpGetTrending(callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + API_URL + '/trending', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText));
        }
    });
    request.send();
}

function httpGetInfluencers(count, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + API_URL + '/influencers?count=' + encodeURIComponent(count), true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText));
        }
    });
    request.send();
}

export { httpGetMessages, httpSendMessage, httpGetTrending, httpGetInfluencers };