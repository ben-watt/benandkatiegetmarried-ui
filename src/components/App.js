import React from 'react';
import MainPage from './mainPage/MainPage.js';
import LoginPage from './loginPage/LoginPage';

import {StyleRoot} from 'radium';
import styles from './mainPage/mainPage-styles';

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