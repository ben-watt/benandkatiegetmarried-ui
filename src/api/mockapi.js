import axios from 'axios';

const api = (function() {
    let obj = {};

    const api = axios.create({
        baseURL: 'http://benandkatiegetmarried.azurewebsites.net',
        timeout: 3000,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    obj.guestLogin = async function (securityCode, password, rememberMe) {
        let res = api.post('/guest-login', {
            SecurityCode: securityCode,
            Password: password,
            RememberMe: rememberMe,
        });

        res
         .then(res => console.log(res.data))
         .catch((error) => console.log(error));
    }

    return {
        guestLogin: obj.guestLogin
    }

})();

export default api;