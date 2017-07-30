import React from 'react';
import styles from './header-styles';


class Header extends React.Component {
    render() {

        return (
            <div style={styles.header}>
                <p style={styles.title}> Katie & Ben </p>
                <p style={styles.date}>24.02.2018</p>  
                <div style={styles.enterDiv}>
                    <h5 style={styles.enter}>Enter Site</h5>
                    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </div>
        )

    }
}

export default Header;