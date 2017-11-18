import React from 'react';
import css from './rsvpForm-styles.css';

class Form extends React.Component  {
    
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
        let meal = false;
        let responses = this.props.rsvp.responses; 
        let response = responses[i];
        let inviteType = this.props.inviteType;

        if(responses.length >= 1) {
            meal = response.response;
        }   

        return (
            <div key={i} className={[css.formElements].join(' ')} >
                <h4 className={css.name}>{val.name}</h4>
                <div className={css.inputs}>
                    <div className={css.input}>
                        <input type="radio" name={val.name} value={true}  
                        onClick={this.props.handleChange}/>Yes
                    </div>
                    <div className={css.input}> 
                        <input type="radio" name={val.name} value={false} 
                        onClick={this.props.handleChange} />No
                    </div>
                    {inviteType === 'day' ?
                        meal === 'true' ?
                            <select value={response.mealChoice} className={[!this.props.visibility && css.hideSelect, css.select].join(' ')}  name={val.name}  onChange={this.props.handleChange} >
                                <option  disabled="disabled" hidden value='choose'>Meal Choice</option>
                                <option value="meat">Meat</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select> 
                        :  
                            <select disabled className={[!this.props.visibility && css.hideSelect, css.select].join(' ')}  name={val.name}>
                                <option value='choose'>Meal Choice</option>
                            </select>
                    : <span />}
                </div>
            </div>
        )
    }
    
    render() {
        return(
            <div ref={(node) => {this.cont = node}} className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
                <div ref={(node) => {this.inner = node}} className={css.inner}>
                    <p className={css.heading}> Will you attend? </p>
                    <p className={css.subHeading}>Kindly respond by December 1st 2017.</p>
                    <form className={css.formOutline} onSubmit={this.props.handleSubmit} >
                        {this.props.rsvp.responses.map(this.generateData)}
                        
                        {this.props.checkFields === false ? <p className={css.warning}> Please ensure all above fields are filled out </p> : <span />}
                     
                        
                        <textarea className={css.diet} rows="4" cols="35" name="dietaryRequirements" onChange={this.props.handleChange}
                            placeholder="If you have any dietary requirements or simply a message you would like to leave, please pop it in this box..." >
                        </textarea>
                        <p className={css.song}> 
                            What song will get you on the dance floor?
                        </p>
                        <p> 
                            <input className={css.songAns} type="text" placeholder="optional" name="songLink" onChange={this.props.handleChange}/>
                        </p>
                        <input ref={(node) => {this.input = node}}className={css.submit} type="submit" value="SIGN RSVP" />
                    </form>  
                </div>
            </div>
        )
    }
}

export default Form;


