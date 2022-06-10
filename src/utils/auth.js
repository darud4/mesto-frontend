const baseUrl = 'https://api.darud4-pr15.nomoredomains.xyz';

function makeRequest(url, props) {
    return fetch(url, props)
        .then(response => response.ok ? response.json() : Promise.reject({ errorCode: response.status, errorText: response.statusText }));

}

export function checkToken(token) {
    //    console.log('checkToken fired');
    const url = baseUrl + '/users/me';
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
    const props = {
        //        method: 'GET',
        headers: headers,
        //        credentials: 'include',

    };
    return makeRequest(url, props);

}

export function doLogin(email, password) {
    const url = baseUrl + '/signin';
    const headers = {
        "Content-Type": "application/json"
    };
    const props = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password })
    };
    return makeRequest(url, props);
}

export function doSignup(email, password) {
    console.log(email, password);
    const url = baseUrl + '/signup';
    const headers = {
        "Content-Type": "application/json"
    };
    const props = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password })
    };
    return makeRequest(url, props);

}