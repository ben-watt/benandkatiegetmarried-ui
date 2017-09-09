import React from 'react';
import css from './rsvpMainDisp-styles.css';
import RsvpForm from '../rsvpForm/RsvpForm.js';
import RsvpComplete from '../rsvpComplete/RsvpComplete.js'
import Material from '../rsvpComplete/Material.js';

class RsvpMainDisp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formVisible: false,
            rsvpFormVisible: false,
            iconVisible: true,
            rsvp: false,
            complete: false,
            style: {},
        }
    }    



    handleClick = () => {
        this.state.formVisible ? null : this.openForm();
    }

    openForm = (event) => {
        this.setState(prevState => ({
            formVisible: true,  
            rsvpFormVisible: true,
            iconVisible: false,
        }))

    }

    closeForm = (final) => {
        final === 'final' ?

        this.setState(prevState=>({
            complete: true
        }))

        : 
      
        this.setState(prevState=>({
            formVisible: !this.state.formVisible, 
            rsvpFormVisible: false,
            iconVisible: true,
            complete: false,
        }))
    }

    formVisible = () => {
        return (
                <div onClick={this.closeForm}>
                    <i className={['fa fa-times', css.close].join(' ')}aria-hidden="true" />
                </div>
   
        )
    }

    completeForm = () => {
        
        setTimeout(() =>{ 
            
            this.setState(prevState=>({
                formVisible: false, 
                rsvpFormVisible: false,
                iconVisible: false,
                complete: false,
                rsvp: true,
            }))
         }, 2000);

         return (
            <RsvpComplete />
            )
    }

    render () {
        this.state.formVisible === true 
        ? document.getElementById('root').classList.add('lock')
        : document.getElementById('root').classList.remove('lock')

       
        
        return (
            <div>
                {this.state.rsvp ? <Material /> : null}
                <div className={this.state.formVisible && css.onShade}></div>
                <div className={[this.state.formVisible && css.formOpen, this.state.rsvp && css.rsvpComplete, css.button].join(' ')}  onClick={this.handleClick}>
                    {
                        this.state.formVisible ? this.formVisible() : <div className={[this.state.iconVisible && css.iconVisible, css.center].join(' ')}> <i  className='fa fa-envelope-o' aria-hidden='true'/></div>
                    }
                    {
                        this.state.complete ? this.completeForm() :    
                        <RsvpForm visibility={this.state.rsvpFormVisible} closeForm={this.closeForm}/>
                    }
                </div>          
            </div>
        )
    
    }
}

export default RsvpMainDisp;
