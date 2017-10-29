import axios from 'axios';

const api = (function() {
    let obj = {};

    const api = axios.create({
        baseURL: 'http://localhost:18399/api',
        timeout: 8000,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })

    obj.guestLogin = async function (securityCode, password, rememberMe) {
        const res = await api.post('/guest-login', {
            SecurityCode: securityCode,
            Password: password,
            RememberMe: rememberMe,
        });   

        localStorage.setItem("eventId", res.data.eventId);

        return res;
    }

    obj.getGuests = async function() {
        const eventId = localStorage.getItem("eventId");
        const res = await api.get('/guest/' + eventId + '/guests-on-invite');
        return res;
    }

    obj.eventDetails = async function(){
        const eventId = localStorage.getItem("eventId");
        const res = await api.get('/guest/' + eventId + '/event-details')
        return res;
    }

    obj.sendRsvp = async function(data) {
        const eventId = localStorage.getItem("eventId");
        const res = await api.post('/guest/' + eventId, data);
        return res;
    }

    obj.postComment = async function(data) {
        const eventId = localStorage.getItem("eventId");
        const messageBoard = await api.get('/guest/' + eventId + '/messageboard');
        const res = await api.post('/guest/' + eventId + '/messageboard/' + messageBoard.data[0].id, data);
        return res;
    }

    obj.deleteComment = async function(commentId) {
        const eventId = localStorage.getItem("eventId");
        const messageBoard = await api.get('/guest/' + eventId + '/messageboard');
        const res = await api.delete('/guest/' + eventId + '/messageboard/' + messageBoard.data[0].id + '/messages/'+ commentId);
        return res;
    }

    obj.getComments = async function(data){
        const eventId = localStorage.getItem("eventId");
        const messageBoard = await api.get('/guest/' + eventId + '/messageboard');
        const res = await api.get('/guest/' + eventId + '/messageboard/' + messageBoard.data[0].id + '/messages', data);
        return res;
    }

    obj.likeComment = async function(commentId, guestDetails){
        const eventId = localStorage.getItem("eventId");
        const messageBoard = await api.get('/guest/' + eventId + '/messageboard');
        const res = await api.post('/guest/' + eventId + '/messageboard/'+ messageBoard.data[0].id + '/messages/' + commentId, guestDetails);
        return res;
    }

    return {
        guestLogin: obj.guestLogin,
        eventDetails: obj.eventDetails,
        sendRsvp: obj.sendRsvp,
        getGuests: obj.getGuests,
        getComments: obj.getComments,
        postComment: obj.postComment,
        deleteComment: obj.deleteComment,
        likeComment: obj.likeComment
    }

})();

export default api;