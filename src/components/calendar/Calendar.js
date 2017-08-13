import React from 'react';
import css from './calendar-styles.css';
import Button from '../common/Button.js'

const Calendar = (props) => {
    const button = {
        margin: '0px',
        height: '0px',
        width: '0px',
        transition: 'opacity 2s, height 0.01s, width 0.01s',
        visibility: 'hidden',
        opacity: '0',
    };

    const visible = props.visibility 
    ? {
        margin: '10px 10px 20px 10px', 
        height: '50px', 
        width: '50px',
        visibility: 'visible',
        opacity: '1', 
        borderRadius:'50%',
        fontSize: '1.5em',
    } 
    : null;

    return (
        <div className={css.setArea}>    
            <Button onClick={props.handleChange} value={'outlookonline'} text={<i className="fa fa-windows" aria-hidden="true"></i>} style={{...button, ...visible}} />
            <Button onClick={props.handleChange} value={'google'} text={<i className="glyph fa fa-google" aria-hidden="true"></i>} style={{...button, ...visible}}/>
            <Button onClick={props.handleChange} value={'ical'} text={<i className="fa fa-apple" aria-hidden="true"></i>} style={{...button, ...visible}}/>
            <Button onClick={props.handleChange} value={'yahoo'} text={<i className="fa fa-yahoo" aria-hidden="true"></i>} style={{...button, ...visible}}/>
        </div>
    );
}

export default Calendar;
