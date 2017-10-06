import React from 'react';
import css from './rsvpForm-styles.css';
import data from '../data/guest-data.js';
import Form from './Form.js';

class RsvpHandleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            responseData: {
                dietary : "",
                song: "",
                responses: []
            },

            isGoing: null,
            checkFields: true,
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
        }))
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
                })
                break;

            case 'select-one':
        
                newObj.responses.map((val) => {
                    if (name === val.name) {
                        val.mealChoice = value
                    }
                })
                break;
            
            default:
                newObj[name] = value;  
        }
console.log(newObj);
        this.setState(prevState => ({
            responseData: newObj,
        }))     
    }

        handleSubmit = (event) => {
            event.preventDefault();
            var submit = false;
            this.state.responseData.responses.map(val => {
  
                
                if (val.isGoing === false) {
                    if ((val.isGoing === 'yes') && (val.mealChoice === false)) {
                        submit = false;
                    }
                    submit = false;
                }

                else {
                    submit = true;
                }
                console.log(submit);
                //counter!
                
        })
       
        // if (submit === 0) {
        //     this.setState((prevState) => {
        //         return {submit: true}
        //     })
            // this.props.closeForm('validate', this.state.guest);
        }
     
    

    timer = undefined;

    render() {  


        return (
            <Form 
                visibility={this.props.visibility}
                responseData={this.state.responseData}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                checkFields={this.state.checkFields}
            />
        )
    }
}

export default RsvpHandleForm;


    // componentWillReceiveProps = (nextProps) => {
    //      if (nextProps.visibility === true && this.props.complete === false) {
    //         this.timer = setTimeout(() => { this.scrollDown(); }, 2000);
    //      }

    //      if (nextProps.arrow === true) {
    //         clearTimeout(this.timer);
    //      }
    //  }

    // componentWillUnmount() {
    //     clearTimeout(this.timer);
    //   }

    // scrollDown = () => {    
    //     if (this.inner.offsetHeight > this.cont.offsetHeight) {
    //             var container = this.cont;
    //             var inner = this.input;
    //             this.props.updateScrollState(container, inner);
    //     }
    // }

    // handleChange = (event) => {
    //     var name = event.target.name;
    //     var value = event.target.value;
    //     var type = event.target.type; 
    //     var index;    

        
    //     //dietry or song
    //     if (name === 'dietry' || name === 'song') {
    //         index = this.state.guest.findIndex(val => {
    //             if (name in val) {
    //                 return name;
    //             }
    //             return false;
           
    //         })
    //         this.setState((prevState) => {
    //             var newArr = prevState.guest;
    //             newArr[index][name] = value 
    //             return {guest: newArr}
    //         })
    //     }
    //     //meal choice or attending
    //     else if (value === 'choose') {
    //         value = null;
    //     }

    //     else {
    //         index = this.state.guest.findIndex(val => {
    //         return val.name === name 
    //         })

            
    //         this.setState((prevState) => {
    //             var newArr = prevState.guest;
    //             value === 'no' ? newArr[index].meal = false : newArr[index].meal = null; 
    //             type === 'radio' ? newArr[index].going = value :newArr[index].meal = value;
    //             return {guest: newArr}
    //         })
    //     } 
    // }

    // handleSubmit = (event) => {
    //     var submit = 0;
    //     this.state.guest.map(val => {
    //         if (Object.values(val).indexOf(null) > -1) {
    //             this.setState((prevState) => {
    //                 return {submit: false}
    //             })
    //             submit++;
    //         }     
    //         return true; 
    //     })
       
    //     if (submit === 0) {
    //         this.setState((prevState) => {
    //             return {submit: true}
    //         })
    //         this.props.closeForm('validate', this.state.guest);
    //     }
    //     event.preventDefault();
    // }

    // generateData = (val, i) => {
    //     return (<FormData 
    //             key={i} 
    //             name={val} 
    //             guest={this.state.guest} 
    //             index={i} 
    //             handleChange={this.handleChange}
    //             visibility={this.props.visibility}
    //             />)
    // }