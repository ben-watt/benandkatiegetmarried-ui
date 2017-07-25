import React from 'react';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import {StyleRoot} from 'radium';
import styles from './components/MainPage-styles';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
        }
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