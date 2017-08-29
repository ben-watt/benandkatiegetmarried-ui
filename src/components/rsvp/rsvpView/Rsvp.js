import React from 'react';
import css from './rsvp-styles.css';
import RsvpForm from '../rsvpForm/RsvpForm.js';

class Rsvp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formVisible: false,
            rsvpFormVisible: false,
        }
    }    

    handleClick = () => {
        this.state.formVisible ? null : this.openForm();
    }

    openForm = (event) => {
        this.setState(prevState => ({
            formVisible: true,  
            rsvpFormVisible: true,
        }))

    }

    closeForm = () => {
        this.setState(prevState=>({
            formVisible: !this.state.formVisible, 
            rsvpFormVisible: false,
        }))
    }

    formVisible = () => {
        return (
    
                <div onClick={this.closeForm}>
                    <i className={['fa fa-times', css.close].join(' ')}aria-hidden="true" />
                </div>
   
        )
    }

    render () {
        return (
            <div>
                <div className={this.state.formVisible && css.onShade}></div>
                <div className={[this.state.formVisible && css.formOpen, css.button].join(' ')}  onClick={this.handleClick}>
                    {
                        this.state.formVisible ? this.formVisible() : <div className={css.center}>RSVP <i  className='fa fa-envelope-o' aria-hidden='true'/></div>
                    }
                    <RsvpForm visibility={this.state.rsvpFormVisible}/>
                </div>          
            </div>
        )
    }
}

export default Rsvp;
