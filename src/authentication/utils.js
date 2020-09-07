// Server config
import * as serverConfig from './server-config';

async function makeRequest(url = '', data = {}, type = '') {
    const response = await fetch(url, {
        method: type,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token && String(token) !== "null" && String(token) !== "undefined";
}

async function createLocalstorageItem(key, value) {
    localStorage.setItem(key, value);
    return true;
}

async function fetchToken() {
    const token = localStorage.getItem("token");
    return { token };
}

export const login = async (credentials = {}) => {
    console.log(checkLoggedIn());
    localStorage.removeItem("token");
    if (!credentials || !credentials.email || !credentials.password) {
        throw new Error("Invalid request.")
    }
    const data = await makeRequest(serverConfig.serverURL + serverConfig.routes.login, credentials, 'POST');

    if (data.error) {
        throw (new Error(data.error));
    } else {
        createLocalstorageItem("token", data.token);
        return {
            success: true,
            data: data
        };
    }
}

export const logout = async () => {
    localStorage.removeItem("token");
    return true;
}