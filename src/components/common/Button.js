import React from 'react';
import css from './button-styles.css';

const Button = (props) => {
    return (
        <button type="button" 
            className={css.button} 
            style={props.style}>
            {props.text}
        </button>
    )
}

export default Button;