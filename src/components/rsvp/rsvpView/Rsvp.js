import React from 'react';
import css from './rsvp-styles.css';
import RsvpForm from '../rsvpForm/RsvpForm.js';

class Rsvp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formVisible: false,
            formOpen: null,
        }
    }    

    handleClick = () => {
        this.state.formVisible ? null : this.openForm();
    }

    openForm = (event) => {
        this.setState(prevState => ({
            formVisible: true,  
            formOpen:  {
                width: '90%',
                height: '90%',
                borderRadius: '0px', 
                bottom: '50%',
                right: '50%',
                backgroundColor: 'white',
                transform: 'translate(50%, 50%)',
                margin: '0 auto',
                zIndex: '6',
            } ,      
        }))
       
    }

    closeForm = () => {
        this.setState(prevState=>({
            formVisible: !this.state.formVisible, 
            formOpen: null,           
        }))
    }

    formVisible = () => {
        return (
            <div>
                <div onClick={this.closeForm}>
                    <i className={['fa fa-times', css.close].join(' ')}aria-hidden="true" />
                </div>
                <RsvpForm />
            </div> 
        )
    }

    render () {
        return (
            <div className={[css.setArea].join(' ')}>
                <div className={this.state.formVisible && css.onShade}></div>
                <div className={css.button} style={this.state.formOpen} onClick={this.handleClick}>
                    {
                        this.state.formVisible ? this.formVisible() : <i className='fa fa-envelope-o' />
                    }
                </div>          
            </div>
        )
    }
}

export default Rsvp;

