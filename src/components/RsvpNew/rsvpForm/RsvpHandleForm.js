import React from 'react';
import api from '../../../api/mockapi.js'
import Form from './Form.js';
import { toast } from 'react-toastify';

class RsvpHandleForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            "responseData": {
                "rsvp" : {
                    "dietaryRequirements" : null,
                    "songLink" : null,
                    "responses" : []
                },
            },
            checkFields: true,
            arrow: false,
            formReady: false,
        }
    }

    componentDidMount = async () => {
        const responses = [];

        this.props.guestDetails.forEach(guest => {
            responses.push({
                guestId: guest.id,
                name: `${guest.firstName} ${guest.lastName}`, 
                response: false, 
                mealChoice: false
            });
        });

        this.setState(prevState => ({
            responseData: {
                rsvp: {
                    ...prevState.responseData.rsvp,
                    responses: responses
                }
            },
            formReady: true
        }))
    }

    scrollCalculate = (container, inner) => {
        if(inner.offsetHeight > container.offsetHeight) {
            this.props.showScrollArrow(container, inner);
        }
    }


    handleChange = (event) => {
        var type = event.target.type
        var name = event.target.name;
        var value = event.target.value;
        var newObj = Object.assign({}, this.state.responseData.rsvp)


        switch (type) {
            case 'radio':
                newObj.responses.map((val) => {
                    if (name === val.name) {
                        val.response = value;
                        if (value === false) {
                            val.mealChoice = false;
                        }
                    }
                    return true;
                })
                break;

            case 'select-one':
        
                newObj.responses.map((val) => {
                    if (name === val.name) {
                        val.mealChoice = value
                    }
                    return true;
                })
                break;
            
            default:
                newObj[name] = value;  
        }
        this.setState(prevState => ({
            responseData: {
                rsvp: newObj,
            }
        }))     
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var submit = 0;
        this.state.responseData.rsvp.responses.map(val => {
            console.log(val)
            if (val.response === false) {
                submit++;
            }
            if ((this.props.inviteType === 'day') && (val.response === 'true') && (val.mealChoice === false)) {
                console.log('here')
                submit++;
            }    
            return true;   
        })

        if (submit > 0) {
            this.setState(prevState =>({
                checkFields: false,
            }))
        }
        else {
            try{
                let req = api.sendRsvp(this.state.responseData);
                let res = await req;
                if(res.status === 201){
                    this.props.submitForm(this.state.responseData.rsvp);
                }

            } catch(e){
                toast.error(`Oh no something went wrong: ${e.message}, 
                             Please try again later or contact Ben and Katie.`)
            }
            
        }
    }

    render() {  
        let formReady = this.state.formReady;

        if(formReady){
            return (
                <Form 
                    visibility={this.props.visibility}
                    rsvp={this.state.responseData.rsvp}
                    scrollCalculate={this.scrollCalculate}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    checkFields={this.state.checkFields}
                    inviteType={this.props.inviteType} 

                />
            )
        }
        else {
            return(
                <div>
                    ...loading                        
                </div>
            )
        }
    }
}

export default RsvpHandleForm;