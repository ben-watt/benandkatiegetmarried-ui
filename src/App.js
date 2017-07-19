import React from 'react';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
        }
    }    

    render() {
        if(this.state.loggedIn === true){
            return <MainPage />
        } else {
            return <LoginPage />
        }
    }
}

export default App;