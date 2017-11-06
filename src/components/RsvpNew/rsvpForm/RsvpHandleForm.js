import React from 'react';
import api from '../../../api/mockapi.js'
import data from '../data/guest-data.js';
import Form from './Form.js';

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

        try {
            let res = await api.getGuests();
            
            if(res.status === 200){
                res.data.forEach(guest => {
                    responses.push({
                        guestId: guest.id,
                        name: `${guest.firstName} ${guest.lastName}`, 
                        response: false, 
                        mealChoice: false
                    });
                });
            }
            
        } catch(e) {
            console.log(`Shit! error ${e}`);
        }

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
            if (val.response === false) {
                submit++;
            }
            if ((val.response === true) && (val.mealChoice === false)) {
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
                this.props.submitForm(this.state.responseData.rsvp);
                let res = await req;
                if(res.status === 201){
                    console.log(res);
                }

            } catch(e){
                console.log(`Shit! error ${e}`);
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