import React from 'react';

import Button from '../common/Button';
import css from './loginPage.css';

const LoginPage = () => {

    this.componentDidMount = () => {
        document.body.classList.add('lock');
    }

    this.componentDidUnMount = () => {
        document.body.classList.remove('lock');
    }

    return (
        <div className={css.loginPane}>
            <form className={css.form}>
                <h2 className={css.prompt}>Please enter your unique code:</h2>
                <input className={css.pass1} type='password'/>
                <h2 className={css.dash}>-</h2> 
                <input className={css.pass2} type='password'/>
                <Button id={css.loginBtn} text={'Login'}/>
            </form>
        </div>
    )
}

export default LoginPage;