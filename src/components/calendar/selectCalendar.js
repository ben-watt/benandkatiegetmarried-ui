
let selectCalendar = (val, invite) => {
    var url;
    if (invite === 'day') {
        switch(val) {
            case 'ical':
                url= "webcal://p20-calendars.icloud.com/published/2/fFPO8ba8NzLWQO5jmcuNKQsWGPrHq1V_2fF5upL2DNmW9UjNtBtDPPe_ftT1yzbFKLRWXVfcxF-8qGFcV6DRG5kl2KKIPInaPRTaKsOrkXg";
                break;
            
                case 'google':
                url = "https://addtocalendar.com/atc/google?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20day%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20http%3A%2F%2Fwww.benandkatiegetmarried.co.uk%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";
                break;
            
            case "outlookonline":
            url = "https://addtocalendar.com/atc/outlookonline?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20day%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20http%3A%2F%2Fwww.benandkatiegetmarried.co.uk%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";
            break;

            case "yahoo":
            url = "https://addtocalendar.com/atc/yahoo?f=m&e[0][date_start]=2018-02-24%2014%3A30%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20day%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20http%3A%2F%2Fwww.benandkatiegetmarried.co.uk%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";
            break;
            default:
                url = "http://benandkatiegetmarried.co.uk/";
        }
    }

    else {
        switch(val) {
            case 'ical':
                url= "webcal://p20-calendars.icloud.com/published/2/sB5d8j_Dm46vG_o3ovl84G38I2mXGCxXkTywHTCfkfiPNs4OzorYtJILkVsj1-ocVYCQ2FLfcH9KDlNvI5Ic6hbxkscMsh-LKVvsvz5q0vw";
                break;
            
            case 'google':
                url = "https://addtocalendar.com/atc/google?f=m&e[0][date_start]=2018-02-24%2019%3A00%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20http%3A%2F%2Fwww.benandkatiegetmarried.co.uk%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";
                break;
            
            case "outlookonline":
            url = "https://addtocalendar.com/atc/outlookonline?f=m&e[0][date_start]=2018-02-24%2019%3A00%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20http%3A%2F%2Fwww.benandkatiegetmarried.co.uk%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";                break;

            case "yahoo":
            url = "https://addtocalendar.com/atc/yahoo?f=m&e[0][date_start]=2018-02-24%2019%3A00%3A00&e[0][date_end]=2018-02-25%2001%3A00%3A00&e[0][timezone]=Europe%2FLondon&e[0][title]=Katie%20and%20Ben's%20Wedding&e[0][description]=The%20wedding%20of%20Katie%20Vallance%20and%20Benjamin%20Watt.%20%20More%20information%20at%20http%3A%2F%2Fwww.benandkatiegetmarried.co.uk%2F&e[0][location]=Worsley%20Park%20Marriott%20Hotel%20And%20Country%20Club,%20M28%202QT&e[0][organizer]=Katie%20and%20Ben&e[0][organizer_email]=&e[0][privacy]=public";            break;
            default:
                url = "http://benandkatiegetmarried.co.uk/";
        }
    }
    window.open(url);
   }

export default selectCalendar;



