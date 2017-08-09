
let selectCalendar = (val) => {
    var link = val;
    var url;

    switch(link) {
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
    }

console.log(url);
    window.open(url);
  // window.open("webcal://addtocalendar.com/atc/"+val+"?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=&e[0][location]=MariottWorsley%20Park%20Marriott%20Hotel%20%26%20Country%20Club&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=katievallance1%40gmail.com&e[0][privacy]=public"); 
   }

export default selectCalendar;


