// Server config
import * as serverConfig from './server-config';

async function makeRequest(url = '', data = {}, type='') {
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

function createLocalstorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
}

function fetchLocalstorageItem(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

export const login = async (credentials = {}) => {
    if(!credentials || !credentials.email || !credentials.password){
        return { error: "Invalid request." }
    }
    makeRequest(serverConfig.serverURL + serverConfig.routes.login, credentials, 'POST').then(data => {
        if(data.error) {
            Promise.reject(data.error);
        } else {
            createLocalstorageItem("token", data.token);
            return { success: true, data: data};
        }
    })
}