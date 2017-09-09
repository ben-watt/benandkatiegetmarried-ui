import React from 'react';
import Button from '../../common/Button.js'
import css from './complete-styles.css';

class RsvpComplete extends React.Component {

    constructor(props) {
        super(props);
           }
    

    render() {    
        return (
           <div className={css.completeMessage}>
           <p>Thankyou!</p>
           </div>
        )
    }
}

export default RsvpComplete;


