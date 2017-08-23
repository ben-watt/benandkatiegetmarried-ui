import React from 'react';

import css from './loginError.css';

const LoginError = (props) => {
    return ( 
        <div className={css.error}>
            <div>Uh oh! Something went wrong.</div>
            <div className={css.detail}>{props.errorMessage}</div>
        </div>
    )
}

export default LoginError;