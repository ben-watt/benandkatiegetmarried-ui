import axios from 'axios';

const api = (function() {
    let obj = {};

    const api = axios.create({
        baseURL: 'http://benandkatiegetmarried.azurewebsites.net',
        timeout: 5000,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    obj.guestLogin = async function (securityCode, password, rememberMe) {

        try {
            const res = await api.post('/guest-login', {
                SecurityCode: securityCode,
                Password: password,
                RememberMe: rememberMe,
            });
            
            return res;
        }
        catch(err){
            return err.response;
        }
    }

    return {
        guestLogin: obj.guestLogin
    }

})();

export default api;