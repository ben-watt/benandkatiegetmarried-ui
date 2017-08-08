import React from 'react';
import css from './button-styles.css';

const Button = (props) => {
    return (
        <button type="button" 
            id={props.id}
            className={css.button} 
            style={props.style}
            onClick={props.onClick}
            value={props.value}>
            {props.text}
        </button>
    )
}

export default Button;