import React from 'react';
import css from './rsvpButton-styles.css';

import RsvpHandleForm from '../rsvpForm/RsvpHandleForm.js';
// import RsvpForm from '../rsvpForm/RsvpForm.js';
// import RsvpComplete from '../rsvpComplete/RsvpComplete.js'
// import Material from '../rsvpComplete/Material.js';
// import scroll from '../scroll.js';

// import RsvpResp from '../rsvpRespData.js';

// import api from '../../../api/mockapi.js';

class RsvpButton extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            buttonClicked: false,
            rsvpFormVisible: false,
        }
    }    

    handleButtonClick = () => {
        this.state.buttonClicked ? null :
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

    iconDisplay = (open) => {
        const buttonClicked = this.state.buttonClicked;
        const visibility = this.state.rsvpFormVisible;
        
                if (open) {
                    return (
                            <div>
                                <div onClick={this.handleCloseClick}>
                                    {!buttonClicked 
                                    ?  <span /> 
                                    : <i className={['fa fa-times', css.close].join(' ')}aria-hidden="true" />  }
                                </div>
                                <RsvpHandleForm visibility={visibility}/>
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
        return (
            <div >
                <div className={this.state.buttonClicked && css.onShade}></div>
                <div 
                    className={[this.state.buttonClicked && css.formOpen,  css.button].join(' ')}  
                    onClick={this.handleButtonClick}>
                    {this.iconDisplay(buttonClicked)}
                </div>          
            </div>
        )
    
    }
}

export default RsvpButton;