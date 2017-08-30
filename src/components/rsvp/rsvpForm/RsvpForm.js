import React from 'react';
import css from './rsvpForm-styles.css';
import data from '../guest-data.js';
import FormData from './FormData.js';
class RsvpForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
        this.state = {
            guest: [],
        }
    }

    componentDidMount = () => {
        const guest = [];
        data.names.map(val => {
            guest.push({name: val, going: null, meal: null})
        })

        this.setState({
            guest: guest
        })
    }

    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var type = event.target.type;

        var index = this.state.guest.findIndex(val => {
           return val.name === name 
        })
        
        this.setState((prevState) => {
            var newArr = prevState.guest;
            type === 'radio' ?
            newArr[index].going = value 
            :newArr[index].meal = value
            return {guest: newArr}
        })
    }

    handleSubmit = (event) => {
     
        this.state.guest.map(val => {
            console.log(val.meal)
            if (val.name === null || val.going=== null || val.meal === null) {
                console.log('NO')
            }

            else this.props.closeForm(); 
        })
        
        event.preventDefault();
    }

    generateData = (val) => {
        return (<FormData key={val} name={val} handleChange={this.handleChange}/>)

    }

    render() {  
        // console.log(this.state.guest);          
        return (
            <div className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
                <p className={css.heading}> Will you attend? </p>
                <p className={css.subHeading}>Please sign your RSVP</p>
                
                <form className={css.formOutline} onSubmit={this.handleSubmit} >
                    {data.names.map(this.generateData)}
                    <input type="submit" value="Submit" />
                </form>
                <p className={css.disclaimer}>*please note when making your meal choice, kosher catering will not be provided.  </p>
            </div>
        )
    }
}

export default RsvpForm;
