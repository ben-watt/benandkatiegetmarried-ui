import axios from 'axios';

const api = (function() {
    let obj = {};
    const endpoint = 'http://benandkatiegetmarried.azurewebsites.net'


    obj.guestLogin = async function (securityCode, password, rememberMe) {
        let res = axios.post(endpoint + '/guest-login', {
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