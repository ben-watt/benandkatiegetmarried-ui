import React from 'react';
import css from './header-styles.css';


class Header extends React.Component {
    render() {
        return (
            <div className={css.header}>
                <p className={css.title}> Katie & Ben </p>
                <p className={css.date}>24.02.2018</p>  
                <div className={css.enterDiv}>
                    <h5 className={css.enter}>Enter Site</h5>
                    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </div>
        )

    }
}

export default Header;