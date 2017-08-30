import React from 'react';
import css from './rsvpForm-styles.css';
import data from '../guest-data.js';
class RsvpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guest: [{name: '', going: false, meal: ''}],
        }
        this.handleSubmit.bind(this);
    }


    func = () => {
        console.log('clicked');
    }

    doThis = (val) => {
        return (
            <div className={css.formElements} key={val} >
                <h4 className={css.name}>{val}</h4>
                <div className={css.input}><input type="radio" name={val} value="yes"  onClick={this.handleChange}/>I'll be there</div>
                <div className={css.input}> <input type="radio" name={val} value="no"  onClick={this.handleChange}/>Cannot attend</div>
                <select name={val}onChange={this.handleChange} >
                    <option value="vegetarian">Vegetarian</option>
                    <option value="meat">Meat</option>
                    <option selected value="choose">Meal Choice</option>
                </select>
            </div>
        )
    }

    handleChange = (event) => {
        var field = event.target.name;
        var value = event.target.value;
        console.log(field);
        console.log(value);
        

        this.setState((prevState) => {
            // console.log(prevState.guest)
            prevState.guest[field] = value  
        });      
  
    }

    handleSubmit = (event) => {
        console.log(event.target);
        event.preventDefault();
    }

    render() {            
        return (
            <div className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
                <p className={css.heading}> Will you attend? </p>
                <p className={css.subHeading}>Please sign your RSVP</p>
                
                <form className={css.formOutline} onSubmit={this.handleSubmit} >
                    {data.names.map(this.doThis)}
                    <input type="submit" value="Submit" />
                </form>
                <p className={css.disclaimer}>*please note when making your meal choice, kosher catering will not be provided.  </p>
            </div>
        )
    }
}

export default RsvpForm;
