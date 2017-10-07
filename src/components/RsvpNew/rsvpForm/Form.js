import React from 'react';
import css from './rsvpForm-styles.css';
import guests from '../data/guest-data';

class Form extends React.Component  {
    constructor(props) {
        super()
    }

    componentDidMount = () => {
        if (this.props.visibility === true) {
            this.timer = setTimeout(() => {
                var container = this.cont;
                var inner = this.inner;
                this.props.scrollCalculate(container, inner); }, 2000);
         }
    }

    componentWillUnmount = () => {
        clearTimeout(this.timer);
    }

    generateData = (val, i) => { 
        let meal = false
        if(this.props.responseData.responses.length >= 1) {
            if (this.props.responseData.responses[i].isGoing === 'no') {
                meal = false;
            }

            else if (this.props.responseData.responses[i].isGoing === 'yes'){
                meal = true;
            }
        }

        return (
            <div key={i} className={[css.formElements].join(' ')} >
                <h4 className={css.name}>{val}</h4>
                <div className={[css.input, css.left].join(' ')}>
                    <input type="radio" name={val} value="yes"  
                    onClick={this.props.handleChange}/>Yes
                </div>
                <div className={[css.input, css.middle].join(' ')}> 
                    <input type="radio" name={val} value="no" 
                    onClick={this.props.handleChange} />No
                </div>

                {meal ?
                <select className={[!this.props.visibility && css.hideSelect, css.select, css.right].join(' ')}  name={val}  onChange={this.props.handleChange} >
                    <option  hidden value='choose'>Meal</option>
                    <option value="meat">Meat</option>
                    <option value="vegetarian">Vegetarian</option>
                </select> 

                :  <select disabled className={[!this.props.visibility && css.hideSelect, css.select, css.right].join(' ')}  name={val}>
                <option value='choose'>Meal Choice</option>
                </select>
                }
            </div>
        )
    }
    timer = undefined;
    
    render() {

        return(
            <div ref={(node) => {this.cont = node}} className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
                <div ref={(node) => {this.inner = node}} className={css.inner}>
                    <p className={css.heading}> Will you attend? </p>
                    <p className={css.subHeading}>Please sign your RSVP</p>
                    <form className={css.formOutline} onSubmit={this.props.handleSubmit} >
                        {guests.names.map(this.generateData)}
                        
                        {this.props.checkFields === false 
                        ?<p className={css.warning}>Please ensure all above fields are filled out</p> 
                        :null}
                        
                        <textarea className={css.diet} rows="4" cols="25" name="dietary" onChange={this.props.handleChange}
                            placeholder="Please notify us of any other dietary requirements..." >
                        </textarea>
                        <p className={css.song}> 
                            What song will get you on the dance floor?
                        </p>
                        <p> 
                            <input className={css.songAns} type="text" placeholder="optional" name="song" onChange={this.props.handleChange}/>
                        </p>
                        <input ref={(node) => {this.input = node}}className={css.submit} type="submit" value="SIGN RSVP" />
                    </form>  
                </div>
            </div>
        )
    }
}

export default Form;

