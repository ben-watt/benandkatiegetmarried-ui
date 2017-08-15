
let selectCalendar = (val) => {
    var url;

    switch(val) {
        case 'ical':
            url = "https://addevent.com/?kN536522";
            break;
        
        case 'google':
            url = "https://addevent.com/?kN536522+google";
            break;
        
        case "outlookonline":
            url = "https://addevent.com/?kN536522+outlookcom"
            break;

        case "yahoo":
            url = "https://addevent.com/?kN536522+yahoo";
            break;
        default:
            url = "https://addevent.com/?kN536522";
    }
    window.open(url);
   }

export default selectCalendar;


