import React from 'react';
import api from '../../../api/mockapi.js'
import Form from './Form.js';
import { toast } from 'react-toastify';
import _ from 'lodash';

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
                mealChoice: false,
                isFeatured: guest.isFeatured,
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
        var target = event.target;
        switch (type) { 
            case 'radio':
                this.setState( prev => ({
                        responseData: {
                            rsvp: {
                                responses: prev.responseData.rsvp.responses.map(x => Object.assign(x, { 'response' : (x.name === target.name) ? target.value : x.response }))
                            }
                        }
                    }));
                break;
            case 'select-one': 
            this.setState( prev => ({
                 responseData: {
                        rsvp: {
                            responses: prev.responseData.rsvp.responses.map(x =>  Object.assign(x, { 'mealChoice' : (x.name === target.name) ? target.value : x.mealChoice }))
                        }
                    }
                }));
                break;
            default: this.setState( prev => ({
                responseData: {
                    rsvp: {
                        [target.name]: target.value
                    }
                }
            }));;
        }  
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var submit = 0;
        this.state.responseData.rsvp.responses.map(val => {
            if (val.response === false) {
                submit++;
            }
            if ((this.props.inviteType === 'day') && (val.response === 'true') && (val.mealChoice === false)) {
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
                    inviteType={this.props.inviteType} />
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