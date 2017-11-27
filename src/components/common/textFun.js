
const textFun = (function(){
    var obj = {};
    return obj.getAttributions = (guests) => {
        var names = "";
        guests.forEach((g,i) => {
            names += `${g.firstName + ' ' + g.lastName}`
    
            if(i === guests.length - 2) {
                names += ' & ';
            } else if(guests.length - 1 !== i) {
                names += ', ';
            }   
        });
        return names;
    }
})();

export default textFun;

