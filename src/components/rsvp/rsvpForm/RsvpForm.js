import React from 'react';
import css from './rsvpForm-styles.css';
import data from '../guest-data.js';
import FormData from './FormData.js';
import Button from '../../common/Button.js'
class RsvpForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
        this.state = {
            guest: [],
            submit: null,
            selected: 'meal choice',
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

        console.log(value)

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
        
           var submit = 0;
            // console.log(val.meal)
            this.state.guest.map(val => {
                if (Object.values(val).indexOf(null) > -1) {
                    this.setState((prevState) => {
                        return {submit: false}
                    })
                    submit++;
                }      
        })
       
        if (submit === 0) {
            this.setState((prevState) => {
                return {submit: true}
            })
            this.props.closeForm();
        }
        
        event.preventDefault();
    }

    generateData = (val, i) => {
        // console.log(i);
        return (<FormData 
                key={i} 
                name={val} 
                guest={this.state.guest} 
                index={i} 
                handleChange={this.handleChange}
                visibility={this.props.visibility}
                />)
    }

    render() {  
        // console.log(this.state.guest);          
        return (
            <div className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
                <p className={css.heading}> Will you attend? </p>
                <p className={css.subHeading}>Please sign your RSVP</p>
                
                <form className={css.formOutline} onSubmit={this.handleSubmit} >
                {data.names.map(this.generateData)}
                
                 {this.state.submit === false ? <p className={css.warning}>Please ensure all fields are filled out YOU IDIOT</p> :null}
                 <p className={css.disclaimer}>*please note when making your meal choice, kosher catering will not be provided.  </p>
                 
                 <input className={css.submit} type="submit" value="Submit" />
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </form>            
            </div>
        )
    }
}

export default RsvpForm;


