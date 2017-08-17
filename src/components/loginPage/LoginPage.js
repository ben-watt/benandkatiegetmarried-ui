import React from 'react';

import api from '../../api/mockapi';
import Button from '../common/Button';
import css from './loginPage.css';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            securityCode : '',
            password : '',
            enterCodeMessage: 'Please enter your unique code:',
            enterCodeCurrent: '',
            formClasses: [css.form],
            catClasses: [css.cat]
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

    login = () => {
        this.setState({
            formClasses: [css.form, css.loginAttempt],
            catClasses: [css.cat, css.loginAttempt]
        })
        //api.guestLogin(this.state.securityCode, this.state.password, 1);
    }

    render() {    
        return (
            <div className={css.loginPane}>
                <form className={this.state.formClasses.join(' ')}>
                    <h2 className={css.prompt}>{this.state.enterCodeCurrent}</h2>
                    <input id='securityCode' onChange={this.change} value={this.state.securityCode} className={css.pass1} type='password'/>
                    <h2 className={css.dash}>-</h2> 
                    <input id='password' onChange={this.change} value={this.state.password} className={css.pass2} type='password'/>
                    <Button id={css.loginBtn} onClick={this.login} text={'Login'}/>
                </form>
                <div className={this.state.catClasses.join(' ')}>
                    <img src='https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy-downsized.gif' alt='working on it'></img>
                    <h2 className={css.prompt}>Working on it!</h2>
                </div>
            </div>
        )
    }
}

export default LoginPage;