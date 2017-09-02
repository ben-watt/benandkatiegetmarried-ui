import axios from 'axios';

const api = (function() {
    let obj = {};

    const api = axios.create({
        baseURL: 'http://benandkatiegetmarried.azurewebsites.net',
        timeout: 8000,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    obj.guestLogin = async function (securityCode, password, rememberMe) {

        const res = await api.post('/guest-login', {
            SecurityCode: securityCode,
            Password: password,
            RememberMe: rememberMe,
        });
        return res;
    }

    obj.eventDetails = async function(){
        const res = await api.get('api/event-details')
        return res;
    }

    return {
        guestLogin: obj.guestLogin,
        eventDetails: obj.eventDetails
    }

})();

export default api;