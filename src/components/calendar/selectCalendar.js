
let selectCalendar = (val, invite) => {
    var url;
    if (invite === 'day') {
        switch(val) {
            case 'ical':
                url= "webcal://p20-calendars.icloud.com/published/2/GRCdGPBfyzMDJ0Mfst8yTCBr40DRmyInj8nmqz2-iax5pYqNDRpdy65NK9vvwBHY9iF5hg6tmwhp7vDK902Dm5LDL3hq9NxCdu9O_aBJjm0";
                break;
            
                case 'google':
                url = "https://addtocalendar.com/atc/google?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20https%3A%2F%2Fwattcode.github.io%2Fbenandkatiegetmarried-ui%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";
                break;
            
            case "outlookonline":
                url = "https://addtocalendar.com/atc/outlookonline?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20https%3A%2F%2Fwattcode.github.io%2Fbenandkatiegetmarried-ui%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public"
                break;

            case "yahoo":
            url = "https://addtocalendar.com/atc/yahoo?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20https%3A%2F%2Fwattcode.github.io%2Fbenandkatiegetmarried-ui%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public"
            break;
            default:
                url = "https://wattcode.github.io/benandkatiegetmarried-ui/";
        }
    }

    else {
        switch(val) {
            case 'ical':
                url= "webcal://p20-calendars.icloud.com/published/2/GRCdGPBfyzMDJ0Mfst8yTCBr40DRmyInj8nmqz2-iax5pYqNDRpdy65NK9vvwBHY9iF5hg6tmwhp7vDK902Dm5LDL3hq9NxCdu9O_aBJjm0";
                break;
            
            case 'google':
                url = "https://addtocalendar.com/atc/google?f=m&e[0][date_start]=2018-02-24%2019%3A00%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20https%3A%2F%2Fwattcode.github.io%2Fbenandkatiegetmarried-ui%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";
                break;
            
            case "outlookonline":
                url = "https://addtocalendar.com/atc/outlookonline?f=m&e[0][date_start]=2018-02-24%2019%3A00%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20https%3A%2F%2Fwattcode.github.io%2Fbenandkatiegetmarried-ui%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public"
                break;

            case "yahoo":
            url = "https://addtocalendar.com/atc/yahoo?f=m&e[0][date_start]=2018-02-24%2019%3A00%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20https%3A%2F%2Fwattcode.github.io%2Fbenandkatiegetmarried-ui%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public"
            break;
            default:
                url = "https://wattcode.github.io/benandkatiegetmarried-ui/";
        }
    }
    window.open(url);
   }

export default selectCalendar;



