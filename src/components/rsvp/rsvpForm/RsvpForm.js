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
            <div className={[this.props.visibility && css.visible, css.notVisible].join(' ')}>
               <button className={css.button} type='button' onClick={this.func}>HEY</button>
               <button className={css.button} type='button' onClick={this.func}>HEY</button>
               <button className={css.button} type='button' onClick={this.func}>HEY</button>
               <button className={css.button} type='button' onClick={this.func}>HEY</button>
            </div>
        )
    }
}

export default RsvpForm;