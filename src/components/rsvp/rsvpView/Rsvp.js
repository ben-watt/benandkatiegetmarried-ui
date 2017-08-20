import React from 'react';
import css from './rsvp-styles.css';
import RsvpForm from '../rsvpForm/RsvpForm.js';

class Rsvp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formVisible: false,
            formContainer: null,
            form: null,
        }
    }    

    openForm = () => {
        console.log('hey');
        this.setState({
            formVisible: true,
            formContainer: {
                visibility: 'visible',
            },
            form: {
                display: 'flex',
            }
        })
    }

    render () {

        var style = null;
        return (
            <div>
                <div className={this.state.formVisible && css.onShade}></div>
                <div className={css.container} onClick={this.openForm}>
                    <i className='fa fa-envelope-o' />
                </div>
                <div className={this.state.formVisible && css.formContainer} style={this.state.formContainer}>
                    <div className={css.form} style={this.state.form}>
                    <RsvpForm />
                    </div>
                </div>
            </div>
        )
    }
}


export default Rsvp;
