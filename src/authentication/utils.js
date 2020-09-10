// Server config
import * as serverConfig from './server-config';

async function makeRequest(url = '', data = {}, type = '', headers = { 'Content-Type': 'application/json'} ) {
    const response = await fetch(url, {
        method: type,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

export const checkToken = () => {
    const token = localStorage.getItem("token");
    return !!token && String(token) !== "null" && String(token) !== "undefined" && JSON.parse(token).expiry > new Date().getTime();
}

async function createLocalstorageItem(key, value) {
    localStorage.setItem(key, value);
    return true;
}

export function fetchToken() {
    const token = localStorage.getItem("token");
    if(new Date().getTime() > token.expiry) {
        logout();
        throw new Error("Token expired.");
    }
    if(!token){
        throw new Error("Token doesn't exist.")
    }
    return { token: JSON.parse(token).token };
}

export const login = async (credentials = {}) => {
    localStorage.removeItem("token");
    if (!credentials || !credentials.email || !credentials.password) {
        throw new Error("Some fields are missing.")
    }
    const data = await makeRequest(serverConfig.serverURL + serverConfig.routes.login, credentials, 'POST');

    if (data.error) {
        throw (new Error(data.error));
    } else {
        createLocalstorageItem("token", JSON.stringify({token: data.token, expiry: new Date().getTime() + 60 * 60 * 1000}));
        return {
            success: true,
            data: data
        };
    }
}

export const register = async (details = {}) => {
    localStorage.removeItem("token");
    if (!details || !details.name || !details.email || !details.password) {
        throw new Error("Some fields are missing.")
    }
    const data = await makeRequest(serverConfig.serverURL + serverConfig.routes.register, details, 'POST');

    if (data.error) {
        throw (new Error(data.error));
    } else {
        createLocalstorageItem("token", JSON.stringify({token: data.token, expiry: new Date().getTime() + 60 * 60 * 1000}));
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