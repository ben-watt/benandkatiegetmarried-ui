import React from 'react';

import api from '../../api/mockapi';
import Button from '../common/Button';
import css from './loginPage.css';

class LoginPage extends React.Component {

    login() {
        api.guestLogin('test', 'test', 1);
    }

    render() {
        return (
            <div className={css.loginPane}>
                <form className={css.form}>
                    <h2 className={css.prompt}>Please enter your unique code:</h2>
                    <input className={css.pass1} type='password'/>
                    <h2 className={css.dash}>-</h2> 
                    <input className={css.pass2} type='password'/>
                    <Button id={css.loginBtn} onClick={this.login} text={'Login'}/>
                </form>
            </div>
        )
    }
}

export default LoginPage;