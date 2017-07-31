import React from 'react';  
import MainPage from './mainPage/MainPage.js';
import LoginPage from './loginPage/LoginPage';
import styles from './mainPage/mainPage-styles';

import {StyleRoot} from 'radium';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
        }
    }    
   
    handleClick() {
    this.setState(prevState => (
        { isToggleOn: !prevState.isToggleOn
        }));
  }

    render() {
        if(this.state.loggedIn === true){
            return (
                <StyleRoot style={styles.body}>
                    <MainPage />
                </StyleRoot>
            )
        } else {
            return <LoginPage />
        }
    }
}

export default App;