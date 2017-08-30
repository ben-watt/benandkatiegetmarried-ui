import React from 'react';
import css from './rsvpForm-styles.css';

const FormData = (props) => {
    return (
        <div className={css.formElements} key={props.name} >
            <h4 className={css.name}>{props.name}</h4>
            <div className={css.input}><input type="radio" name={props.name} value="yes"  onClick={props.handleChange}/>I'll be there</div>
            <div className={css.input}> <input type="radio" name={props.name} value="no"  onClick={props.handleChange}/>Cannot attend</div>
            <select name={props.name}onChange={props.handleChange} >
                <option value="choose">Meal Choice</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="meat">Meat</option>
            </select>
        </div>
    )
}

export default FormData;