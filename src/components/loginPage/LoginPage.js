import React from 'react';

import Button from '../common/Button';
import css from './loginPage.css';

const LoginPage = () => {
    return (
        <div className={css.loginPane}>
            <form className={css.form}>
                <h2>Please enter your unique code:</h2>
                <input className={css.pass1} type='password'/>
                <h2 className={css.dash}>-</h2> 
                <input className={css.pass2} type='password'/>
                <button className={css.btn}>LOGIN</button>
            </form>
        </div>
    )
}

export default LoginPage;