import React from 'react';
import css from './rsvpForm-styles.css';
import data from '../guest-data.js';
class RsvpForm extends React.Component {

    constructor(props) {
        super(props);
    }


    func = () => {
        console.log('clicked');
    }

    doThis = (val) => {
        return (
           
           
                <tr key={val}>
                    <td>{val}</td>
                    <td><input type="radio" name={val} value="option2"  />I'll be there</td>
                    <td> <input type="radio" name={val} value="option2"  />Cannot attend</td>
                    <td> 
                        <select>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="meat">Meat</option>
                            <option selected value="choose">Meal Choice</option>
                        </select>
                    </td>
                </tr>
               
        
        )
 
    }

    render() {            
        return (
            <div className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
                <p className={css.heading}> Will you attend? </p>
                <p className={css.subHeading}>Please sign your RSVP</p>
                <table className={css.names}>
                    <tbody>{data.names.map(this.doThis)}</tbody>
                </table>
                <p className={css.disclaimer}>*please note when making your meal choice, kosher catering will not be provided.  </p>
            </div>
        )
    }
}

export default RsvpForm;