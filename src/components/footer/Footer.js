import React from 'react';
import css from './footer-styles.css';

class footer extends React.Component {

    render() {

        return (
            <div className={css.footer}>
                <p>footer</p>
                <p>Map icon designed by Icon made by Freepik from www.flaticon.com</p>
            </div>
        )

    }
}

export default footer;