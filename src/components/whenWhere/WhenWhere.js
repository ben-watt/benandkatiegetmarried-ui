import React from 'react';
import css from './whenWhere-styles.css';
import Button from '../common/Button.js';
import selectCalendar from '../calendar/selectCalendar.js';
import Calendar from '../calendar/Calendar.js';

class WhenWhere extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calendarVisible: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }    

    handleChange(event) {
        this.setState({
            calendarVisible: !this.state.calendarVisible,
        }, selectCalendar(event.currentTarget.value));
       
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

    render() {

        return (
            <div className={css.setArea}>
                <div className={css.container}>
                    <div className={[css.katiePic, css.pic].join(' ')}> </div>
                    <p className={[css.ampersand].join(' ')}>& </p>
                    <div className={[css.benPic, css.pic].join(' ')}></div> 
                    <h1 className={[css.katieHeading, css.headings].join(' ')}>Katie</h1>
                    <h1 className={[css.benHeading, css.headings].join(' ')}>Ben</h1>

                    <h2 className={css.statement}>Are getting married</h2>
                    <p className={css.invite}>And we would love for you to celebrate with us...</p>

                    <h1 id='when' className={[css.headings, css.details, css.ipadWhen].join(' ')}><u>WHEN</u></h1>
                    <p  className={[css.text, css.ipadWhenDeets].join(' ')}>The 24th of February 2018, at 2.30 in the afternoon.</p>
                    <Button text={'Add to Calendar'} onClick={() => this.showCalendarMenu()} id={css.buttonLeft} />
                    <Calendar handleChange={this.handleChange} visibility={this.state.calendarVisible}/> 
                        
                    <div className={css.border}></div>
                    <hr className={css.hr}/>

                    <h1 id='where' className={[css.headings, css.details, css.ipadWhere].join(' ')}><u>WHERE</u></h1>
                    <p className={[css.text, css.ipadWhereDeets].join(' ')}>The Worsley Park Marriott Hotel & Country Club, Manchester M28 2QT</p>
                    <Button text={'Get Directions'} onClick={() => this.showDirections()} id={css.buttonRight} />
                </div>
            </div>
        )
    }
}

export default WhenWhere;

