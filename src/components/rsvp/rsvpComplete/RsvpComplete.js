import React from 'react';
import css from './complete-styles.css';


class RsvpComplete extends React.Component {

    render() {    
        return (
           <div>
           <p className={css.completeMessage}> Thankyou for your RSVP!</p>
           <p className={css.image}></p>
           </div>
        )
    }
}

export default RsvpComplete;


