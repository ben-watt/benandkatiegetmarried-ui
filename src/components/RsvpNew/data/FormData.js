import React from 'react';
import css from '../rsvpForm/rsvpForm-styles.css';

const FormData = (props) => {
    var going = false;
    if (props.guest.length > 1) {
        if (props.guest[props.index].going === 'no') {
            going = false
        }
        if (props.guest[props.index].going === 'yes') {
            going = true;
        }

        else going=false;
    }

    return (
        <div className={[css.formElements].join(' ')} >
            <h4 className={css.name}>{props.name}</h4>
            <div className={[css.input, css.left].join(' ')}><input type="radio" name={props.name} value="yes"  onClick={props.handleChange}/>Yes</div>
            <div className={[css.input, css.middle].join(' ')}> <input type="radio" name={props.name} value="no"  onClick={props.handleChange}/>No</div>
           
            {!going 
            ?
            <select disabled className={[!props.visibility && css.hideSelect,  css.select, css.right].join(' ')}  name={props.name}>
                <option value='choose'>Meal Choice</option>
            </select>

            : 
            <select className={[!props.visibility && css.hideSelect,  css.select, css.right].join(' ')}  name={props.name} onChange={props.handleChange} >
                <option  hidden value='choose'>Meal Choice</option>
                <option value="meat">Meat</option>
                <option value="vegetarian">Vegetarian</option>
            </select> }
        </div>
    )
}

export default FormData;