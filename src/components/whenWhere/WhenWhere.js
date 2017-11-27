import React from 'react';
import css from './whenWhere-styles.css';
import Button from '../common/Button.js';
import selectCalendar from '../calendar/selectCalendar.js';
import Calendar from '../calendar/Calendar.js';
import api from '../../api/mockapi.js';
import { toast } from 'react-toastify';
import textFun from '../common/textFun';
import _ from 'lodash';

class WhenWhere extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calendarVisible: false,
            venueDetails: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }    

    componentDidMount = async () => {
        try {
            const res = await api.venueDetails();
            if(res.status === 200){
                this.setState({
                    venueDetails: res.data[0]
                })
            }
        } catch(err) {
            console.log(err);
            toast.error("Oh no for some reason we couldn't get the event details");
        }
    }

    handleChange(event) {
        this.setState({
            calendarVisible: !this.state.calendarVisible,
        }, selectCalendar(event.currentTarget.value, this.props.inviteType));
       
        event.preventDefault();    
  }

    showCalendarMenu() {
        this.setState({
            calendarVisible: !this.state.calendarVisible
            });
    }

    showDirections() {
        window.open("https://www.google.co.uk/maps/dir//''/@53.5183175,-2.4592602,12.59z/data=!4m8!4m7!1m0!1m5!1m1!1s0x0:0x63e9bf1416b0ca94!2m2!1d-2.390937!2d53.506292", '_blank');
    }

    getVenueDetails() {
        const venue = this.state.venueDetails;
        return venue === null ? '' : `${venue.name}, ${venue.town} ${venue.postcode}`
    }

    getDate() {
        const date = new Date(this.props.eventDate);
        const day = date.toLocaleDateString("en-GB",{ day: "2-digit" });
        const monthYear = date.toLocaleDateString("en-GB", {month: "long", year: "numeric"});

        let message = `The ${day}th of ${monthYear}, at`
        if(this.props.inviteType === "day"){
            return message += ` 2:30 in the afternoon`
        }
        return message += ` 7:00 in the evening`

    }

    getInviteMessage() {
        let message = `And we would love for you to`
        if(this.props.inviteType === "day"){
            return message += ` celebrate with us...`
        }
        return message += ` join us at an evening reception...`
    }

    getAttributions = (attributions) => {
        attributions=_.orderBy(attributions, ['isFeatured', 'name'], ['desc', 'asc'])
        
        return textFun(attributions);
    }


    render() {
        console.log(this.props.guestDetails)
        return (
            <div className={css.setArea}>
                <div className={css.container}>
                    <p className={css.names}>Dear {this.getAttributions(this.props.guestDetails)}</p>
                    <div className={[css.katiePic, css.pic].join(' ')}> </div>
                    <p className={[css.ampersand].join(' ')}>& </p>
                    <div className={[css.benPic, css.pic].join(' ')}></div> 
                    <h1 className={[css.katieHeading, css.headings].join(' ')}>Katie</h1>
                    <h1 className={[css.benHeading, css.headings].join(' ')}>Ben</h1>

                    <h2 className={css.statement}>Are getting married</h2>
                    <p className={css.invite}>{this.getInviteMessage()}</p>

                    <h1 id='when' className={[css.headings, css.details, css.ipadWhen].join(' ')}><u>WHEN</u></h1>
                    <p  className={[css.text, css.ipadWhenDeets].join(' ')}>{this.getDate()}</p>
                    <Button text={'Add to Calendar'} onClick={() => this.showCalendarMenu()} id={css.buttonLeft} />
                    <Calendar handleChange={this.handleChange} visibility={this.state.calendarVisible}/> 
                        
                    <div className={css.border}></div>
                    <hr className={css.hr}/>

                    <h1 id='where' className={[css.headings, css.details, css.ipadWhere].join(' ')}><u>WHERE</u></h1>
                    <p className={[css.text, css.ipadWhereDeets].join(' ')}>{this.getVenueDetails()}</p>
                    <Button text={'Get Directions'} onClick={() => this.showDirections()} id={css.buttonRight} />
                </div>
            </div>
        )
    }
}

export default WhenWhere;

