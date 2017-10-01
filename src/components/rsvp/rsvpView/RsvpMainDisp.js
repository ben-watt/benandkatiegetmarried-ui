import React from 'react';
import css from './rsvpMainDisp-styles.css';
import RsvpForm from '../rsvpForm/RsvpForm.js';
import RsvpComplete from '../rsvpComplete/RsvpComplete.js'
import Material from '../rsvpComplete/Material.js';
import scroll from '../scroll.js';

class RsvpMainDisp extends React.Component {

    constructor(props){
        super(props);
        this.updateScrollState.bind(this);
        this.state = {
            formVisible: false,
            rsvpFormVisible: false,
            iconVisible: true,
            rsvp: false,
            complete: false,
            style: {},
            arrow: false,
            offsets: {},
        }
    }    

    updateScrollState = (container, inner) => {
        this.setState((prevState) => ({
            arrow: true,
            offsets: {container: container, inner: inner }
        }))
    }

    scrollDown = () => {
        scroll(this.state.offsets.container, this.state.offsets.inner);
    }

    handleClick = () => {
        return this.state.formVisible ? null : this.openForm();
    }

    openForm = (event) => {
        this.setState(prevState => ({
            formVisible: true,  
            rsvpFormVisible: true,
            iconVisible: false,
        }))
    }

    displayScroll = () => {
        this.setState((prevState)=> ({
            scrollArrow: true,
        }))
    }

    closeForm = (validate, final) => {
        console.log(final);
        validate === 'validate' 
        ?
            
        this.setState(prevState=>{
                return {complete: true}
            })
        : 
            this.setState(prevState=>({
                formVisible: !this.state.formVisible, 
                rsvpFormVisible: false,
                iconVisible: true,
                complete: false,
            }))
    }

    formVisible = (val) => {

        if (val === true) {
            return (
                    <div>
                        <div onClick={this.closeForm}>
                            {!this.state.complete 
                            ? <i className={['fa fa-times', css.close].join(' ')}aria-hidden="true" />   
                            : <span />}
                        </div>
                        {this.state.arrow && this.state.formVisible ? <div onClick={this.scrollDown}> <i className={[css.arrow, "fa fa-angle-double-down"].join(' ')} aria-hidden="true"></i> </div> : null}
                    </div>
            )
        }

        else {
            return (
                <div className={[this.state.iconVisible && css.iconVisible, css.center].join(' ')}> <i className='fa fa-envelope-o' aria-hidden='true'/></div>
            )
        }
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
            <div >
                {this.state.rsvp ? <Material /> : null}
                <div className={this.state.formVisible && css.onShade}></div>
                <div className={[this.state.formVisible && css.formOpen, this.state.rsvp && css.rsvpComplete, css.button].join(' ')}  onClick={this.handleClick}>
                    {this.state.formVisible ? this.formVisible(true) : this.formVisible(false)}
                    {this.state.complete ? this.completeForm() :<RsvpForm visibility={this.state.rsvpFormVisible} closeForm={this.closeForm} updateScrollState={this.updateScrollState} complete={this.state.complete} arrow={this.state.arrow}/>}
                </div>          
            </div>
        )
    
    }
}

export default RsvpMainDisp;