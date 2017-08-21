import React from 'react';
import css from './rsvpForm-styles.css';

class RsvpForm extends React.Component {

    constructor(props) {
        super(props);

    }

    func = () => {
        console.log('clicked');
    }


    render() {
        return (
            <div className={css.setArea}>
               <button type='button' onClick={this.func}>HEY</button>
            </div>
        )
    }
}

export default RsvpForm;