import axios from 'axios';

const api = (function() {
    let obj = {};

    const api = axios.create({
        baseURL: 'http://benandkatiegetmarried.azurewebsites.net',
        timeout: 5000,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    obj.guestLogin = async function (securityCode, password, rememberMe) {

        const req = await api.post('/guest-login', {
            SecurityCode: securityCode,
            Password: password,
            RememberMe: rememberMe,
        });

        return req;
    }

    return {
        guestLogin: obj.guestLogin
    }

})();

export default api;