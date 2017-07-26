import React from 'react';
import styles from './MainPage-styles';
import Radium from 'radium';


class footer extends React.Component {

     
     
    
    render() {

        return (
            <div style={styles.footer}>
            <p>footer</p>
            <p>Map icon designed by Icon made by Freepik from www.flaticon.com</p> 
            </div>
        )

    }
}

export default Radium(footer);