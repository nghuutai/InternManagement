
export function getHeader(curEmp, method, url, body) {
    let header = {}, token, secret;
    if (curEmp) {
        token = curEmp.token;
        secret = curEmp.secret;
    } else {
        token = localStorage.token || null;
        secret = localStorage.secret || null;
    }
    if (token) {
        //header = getSecurityHeaders(method, url, body, token, secret);
    }

    header['Accept'] = 'application/json';
    header['Content-Type'] = 'application/json';
    header['Authorization'] = 'Bearer ' + token;

    return header;
}
