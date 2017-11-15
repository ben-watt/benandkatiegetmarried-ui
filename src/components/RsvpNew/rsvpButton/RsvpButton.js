import React from 'react';
import css from './rsvpButton-styles.css';

import RsvpHandleForm from '../rsvpForm/RsvpHandleForm.js';
import ThankyouMessage from '../formCompletion/ThankyouMessage.js'
import scroll from './scroll.js';
import Material from '../formCompletion/Material.js';

class RsvpButton extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            buttonClicked: false,
            rsvpFormVisible: false,
            thankyouMessage: false,
            scrollArrow: false,
            offsets:{},
            complete: false,
        }
    }

    handleButtonClick = () => {
        this.state.buttonClicked ? this.newFunction() :
        this.setState(prevState => ({
            buttonClicked: true,  
            rsvpFormVisible: true,
        }))
    }

    handleCloseClick = () => {
            this.setState(prevState=>({
                buttonClicked: false, 
                rsvpFormVisible: false,
            }))
    }

    showScrollArrow = (container, inner) => {
        this.setState(prevState=>({
            scrollArrow:true,
            offsets: {container: container, inner: inner}
        }))
    }


    scrollDown = () => {
        scroll(this.state.offsets.container, this.state.offsets.inner);
    }

    submitForm = (data) => {
        console.log(data);
        this.setState(prevState=>({
            rsvpFormVisible: false,
            thankyouMessage: true,
        }))
    }

    completeForm = () => {
        setTimeout(() =>{
            this.setState(prevStatw=>({
                buttonClicked: false,
                thankyouMessage: false,
                complete: true,
            }))
         },2000)
        return <ThankyouMessage />
    }


    newFunction() {
        return null;
    }

    iconDisplay = (open) => {
        const visibility = this.state.rsvpFormVisible;
        const thankyou = this.state.thankyouMessage;
        const scrollArrow = this.state.scrollArrow;
        if (open) {
            return (
                    <div>
                        <div onClick={this.handleCloseClick}>
                            {thankyou ? null 
                            : <i className={['fa fa-times', css.close].join(' ')}aria-hidden="true" />  
                            }
                        </div>
                        {scrollArrow && !thankyou ? 
                        <div onClick={this.scrollDown}> 
                            <i className={[css.arrow, "fa fa-angle-double-down"].join(' ')} aria-hidden="true"></i> 
                        </div> 
                        : null}
                        <RsvpHandleForm 
                            guestDetails={this.props.guestDetails}
                            visibility={visibility}
                            submitForm={this.submitForm}
                            showScrollArrow={this.showScrollArrow}
                            inviteType={this.props.inviteType} 

                        />
                    </div>
            )
        }
        else {
            return (
                <div className={[css.iconCenter].join(' ')}> 
                    <i className='fa fa-envelope-o' aria-hidden='true'/>
                </div>
            )
        }
    }

    render () {
        const buttonClicked = this.state.buttonClicked;
        const thankyou = this.state.thankyouMessage;
        const formComplete = this.state.complete;

        this.state.buttonClicked === true 
        ? document.getElementById('root').classList.add('lock')
        : document.getElementById('root').classList.remove('lock')
        return (
            <div>
            <div className={this.state.buttonClicked && css.onShade}></div>
                {formComplete ? 
                <Material /> :
                
                <div 
                    className={[this.state.buttonClicked && css.formOpen,  css.button].join(' ')}  
                    onClick={this.handleButtonClick}>
                    {this.iconDisplay(buttonClicked)}
                    {thankyou ? this.completeForm() : null}
                </div>     }     
            </div>
            
        )
    
    }
}

export default RsvpButton;