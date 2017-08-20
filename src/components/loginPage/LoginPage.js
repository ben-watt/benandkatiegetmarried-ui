import React from 'react';
import Vivus from 'vivus';

import api from '../../api/mockapi';
import Button from '../common/Button';
import css from './loginPage.css';
import loadingImg from './images/loading.svg';
import LoginError from './LoginError';

import App from '../App';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            securityCode : '',
            password : '',
            enterCodeMessage: 'Please enter your unique code:',
            enterCodeCurrent: '',
            formClasses: [css.form],
            catClasses: [css.cat],
            loadPercentage: 1,
            errorMessage: '',
            error: false,
        }

    }

    change = (e) => {
        const input = e.target.value;
        const id = e.target.id;

        this.setState(prev => ({
            securityCode: id === 'securityCode' ? input : prev.securityCode,
            password: id === 'password' ? input : prev.password,
        }));
    }

    enterCode = () =>{
        this.setState(prev => {
            const currM = prev.enterCodeCurrent;
            const fullM = prev.enterCodeMessage;
            const newLetter = fullM.slice(currM.length, currM.length + 1);

            return {enterCodeCurrent: currM.concat(newLetter)}
        });
    }

    componentDidMount = () => {
        setInterval(this.enterCode, 60);       
    }

    enter = (e) => {
        if(e.key === "Enter"){
            this.login();
        }
    }

    incrementloaderPerc = () => {
        if(this.state.loadPercentage === 99){
            clearInterval(this.loaderInterval);
        }
        this.setState((prev) => ({
            loadPercentage : prev.loadPercentage + 1
        }));
    }

    toggleLoader = () => {
        this.setState(prev =>  ({
            formClasses: prev.formClasses.length === 1 ? [css.form, css.loginAttempt] : [css.form],
            catClasses: prev.catClasses.length === 1 ? [css.cat, css.loginAttempt] : [css.cat]
        }))
    }

    login = async () => {
        const req = api.guestLogin(this.state.securityCode, this.state.password, 1);
    
        const duration = 400; 
        const loaderInterval = duration / 6;

        this.loaderInterval = setInterval(this.incrementloaderPerc , loaderInterval);
        new Vivus('loader', {duration: duration});
        this.toggleLoader();

        const res = await req;
        this.handleResponse(res);    
    }

    handleResponse = async (res) => {
        if(res.status === 200) {
            console.log(this.loaderInterval);
            //this.props.login();
        } else if(res.status === 400) {
            this.toggleLoader()
            this.setState({ error: true, errorMessage: res.data.ErrorMessage })
        } else {
            this.toggleLoader()
            this.setState({ error: true, errorMessage: res.data.ErrorMessage })
        }
    }

    render() {    
        return (
            <div className={css.loginPane}>
                <form onKeyUp={this.enter} className={this.state.formClasses.join(' ')}>
                    <h2 className={css.prompt}>{this.state.enterCodeCurrent}</h2>
                    <input id='securityCode' onChange={this.change} value={this.state.securityCode} className={css.pass1} type='password'/>
                    <h2 className={css.dash}>-</h2> 
                    <input id='password' onChange={this.change} value={this.state.password} className={css.pass2} type='password'/>
                    { this.state.error && <LoginError errorMessage={this.state.errorMessage}/>}
                    <Button id={css.loginBtn} onClick={this.login} text={'Login'}/>
                </form>
                <div className={this.state.catClasses.join(' ')}>
                    <object className={css.loader} id="loader" type="image/svg+xml" data={loadingImg}></object>
                    <h2 className={css.perc}>{this.state.loadPercentage}%</h2>  
                </div>          
            </div>    
        )
    }
}

export default LoginPage;