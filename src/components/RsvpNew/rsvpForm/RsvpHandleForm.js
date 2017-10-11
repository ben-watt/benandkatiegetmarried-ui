import React from 'react';

import data from '../data/guest-data.js';
import Form from './Form.js';

class RsvpHandleForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            responseData: {
                dietary : "",
                song: "",
                responses: []
            },

            isGoing: null,
            checkFields: true,
            arrow: false,
            form: false,
        }
    }

    componentDidMount = () => {
        const responses = [];
        data.names.map(val => {
            return responses.push({name:val, isGoing: false, mealChoice: false})
        });

        this.setState(prevState => ({
            responseData: {
                ...prevState.responseData,
                responses: responses
            },
            form: true
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
        var newObj = Object.assign({}, this.state.responseData)

        switch (type) {
            case 'radio':
                newObj.responses.map((val) => {
                    if (name === val.name) {
                        val.isGoing = value
                        if (value === 'no') {
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
            responseData: newObj,
        }))     
    }

        handleSubmit = (event) => {
            event.preventDefault();
            var submit = 0;
            this.state.responseData.responses.map(val => {
                if (val.isGoing === false) {
                    submit++;
                }
                if ((val.isGoing === 'yes') && (val.mealChoice === false)) {
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
                this.props.submitForm(this.state.responseData)
            }
        }
     
    timer = undefined;

    render() {  

        if (this.state.form === true) {
        return (
            <Form 
                visibility={this.props.visibility}
                responseData={this.state.responseData}
                scrollCalculate={this.scrollCalculate}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                checkFields={this.state.checkFields}
            />
        )
    }

    else return (
        <div>
            ..loading
            </div>
    )
    }
}

export default RsvpHandleForm;