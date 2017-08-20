const mod = (function() {
    var obj = {};

    obj.cookieExists = function cookieExists(searchTerm) {
        if(document.cookie.indexOf(searchTerm) > -1){
            return true;
        } else {
            return false;
        }
    }
    
    return {
        cookieExists: obj.cookieExists
    }

})();

export default mod;