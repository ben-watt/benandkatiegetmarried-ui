import React from 'react';
import css from './rsvpButton-styles.css';

import RsvpHandleForm from '../rsvpForm/RsvpHandleForm.js';
import ThankyouMessage from '../formCompletion/ThankyouMessage.js'
import scroll from './scroll.js';
import Material from '../formCompletion/Material.js';
import { toast } from 'react-toastify';

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
            rsvpIncomplete: this.props.showRsvp,
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
        toast("It looks like you aren't ready to send your reply.  Please make sure you send it by 13th January 2018.", {
            className: css.purpleToast,
            progressClassName: css.purpleToastProg,
            autoClose: 8000
        })
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
        this.setState(prevState=>({
            rsvpFormVisible: false,
            thankyouMessage: true,
        }))
    }

    completeForm = () => {
        setTimeout(() =>{
            this.setState(prevState=>({
                buttonClicked: false,
                thankyouMessage: false,
                complete: true,
                rsvpIncomplete: false,
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
                   RSVP
                </div>
            )

      
        }
    }

    fixedButtonDisplay = () => {
        return (
             <div className={[css.iconCenter, css.test].join(' ')}> 
                    <i className='fa fa-check' aria-hidden='true'/>
                </div>
        )
    }



    render () {
        const buttonClicked = this.state.buttonClicked;
        const thankyou = this.state.thankyouMessage;
        const formComplete = this.state.complete;
        const rsvpIncomplete = this.state.rsvpIncomplete;

        this.state.buttonClicked === true 
        ? document.getElementById('root').classList.add('lock')
        : document.getElementById('root').classList.remove('lock')
        
        return (
            <div>
            <div className={this.state.buttonClicked && css.onShade}></div>
                {!rsvpIncomplete ? 
                <div>
                    <div className={[css.button, css.fixedGreen].join(' ')} onClick={()=> toast.warning(`We have already received your RSVP. 
                        If you wish to alter your response, please contact Ben and Katie directly. `, {autoClose: 10000})}>
                        {this.fixedButtonDisplay()}  
                    </div>
                </div>  
                
                :
                
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