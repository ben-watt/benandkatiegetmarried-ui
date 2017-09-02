import React from 'react';
import css from './rsvpForm-styles.css';

const FormData = (props) => {
var selected;
if (props.guest.length > 1) {
    if (props.guest[props.index].meal === null) {
        selected = 'undefined';
    }
        else selected = props.guest[props.index].meal;
}

   

    return (
        <div className={[css.formElements].join(' ')} >
            <h4 className={css.name}>{props.name}</h4>
            <div className={[css.input, css.left].join(' ')}><input type="radio" name={props.name} value="yes"  onClick={props.handleChange}/>Yes</div>
            <div className={[css.input, css.middle].join(' ')}> <input type="radio" name={props.name} value="no"  onClick={props.handleChange}/>No</div>
            <select className={[!props.visibility && css.hideSelect, css.select, css.right].join(' ')} value={selected} name={props.name} onChange={props.handleChange} >
                <option  hidden value='choose'>Meal Choice</option>
                <option value="meat">Meat</option>
                <option value="vegetarian">Vegetarian</option>
            </select>
        </div>
    )
}

export default FormData;