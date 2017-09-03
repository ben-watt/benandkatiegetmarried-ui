import axios from 'axios';

const api = (function() {
    let obj = {};

    const api = axios.create({
        baseURL: 'http://benandkatiegetmarried.azurewebsites.net/api',
        timeout: 8000,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    obj.guestLogin = async function (securityCode, password, rememberMe) {

        try {

            const res = await api.post('/guest-login', {
                SecurityCode: securityCode,
                Password: password,
                RememberMe: rememberMe,
            });   

            localStorage.setItem("eventId", res.data.eventId);

            return res;

        } catch(err){
            console.log(err);
        }
    }

    obj.eventDetails = async function(){
        const eventId = localStorage.getItem("eventId");
        const res = await api.get('/guest/' + eventId + '/event-details')
        return res;
    }

    return {
        guestLogin: obj.guestLogin,
        eventDetails: obj.eventDetails
    }

})();

export default api;